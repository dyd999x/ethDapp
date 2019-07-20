pragma solidity ^0.4.24;

contract BatteryInfo{
    
    address ownerAccount;
    
    // static info
    struct StaticInfo{
        uint batteryID;
        string brand;
        string catalogName;
        string datasheetLink;
        uint manufacturePrice;
        uint maximumChargingCount;
        uint maximumDischargingCount;
        uint maximumChargingDuration;
        uint maximumDischargingDuration;
        uint manufactureDate;
        bool exists;
    }
    
        //dynamic info
    
    struct DynamicInfo{
        uint price;
        uint actualChargingCount;
        uint actualDischargingCount;
        address ownerAddress;
        uint stationID;
    }
    
    mapping(uint => StaticInfo) public batteriesStaticInfo; //batteryID => StaticInfo
    mapping(uint => DynamicInfo) public batteriesDynamicInfo; //batteryID => DynamicInfo
    mapping(address =>uint) public owners; //address of drivers => their batteryID (a driver can have only one battery)

    event UpdatePrice(uint BatteryID); //emitted when the owner updates the price of its battery
    
    modifier onlyOwner(uint batteryID) {
        require(owners[msg.sender] == batteryID);
        _;
    }

    //the recommended price is calculated off chain and the owner has the option to update the 
    // price with the recommended price or to enter a new price( lower or higher). He will see this in the user interface
    
    function updatePrice(uint _batteryID,uint _newPrice) public onlyOwner(_batteryID){
       require(_newPrice >0);
       batteriesDynamicInfo[owners[msg.sender]].price = _newPrice;
    }

}
    
contract BatteryInterface is BatteryInfo{
    
    address public systemManager;
    uint requestID =0;
    
    struct SwapRequest{
        address sender;
        uint requestDate;
        uint ownerBatteryID;
        uint requestedBatteryID;
        uint stationID;
        uint ownerCost;
        uint stationCost;
        bool managed;
        bool paid;
        bool accepted;
        bool confirmed;
    }
    
    struct Station{
        uint id;
        string stationAddress;
        uint[] requests;
    }
    
    mapping(uint => SwapRequest) public requests;
    
    mapping(uint => address) public employeeList; //stationID => operator address
    mapping(uint => uint[]) public stationBatteries; //stationID => batteryIDs
    mapping(address => uint) public opToStation; //operator address => stationID
    mapping(uint => bool) stationExists; //stationID => true/false

    
    uint[] stationIDs;
    
    mapping(uint => Station) public stationDetails; //index from stationIDs array  => Station
    mapping(uint=>Station) public idToStation;
    mapping(address =>uint[])  public myRequests;  
    
    modifier managerOnly(){
        require(msg.sender == systemManager);
        _;
    }
    
    modifier operatorOnly(){
        require(opToStation[msg.sender]!=0);
        _;
    }
    
    modifier registered(uint a){
        require(stationExists[a] == true);
        _;
    }
    
    event OperatorAdded(uint StationID, address Operator);
    event BatteryRegisteredToStation(uint StationID, uint BatteryID);
    event BatteryRegisteredToOwner(uint BatteryID, address Owner);
    event OwnerCost(uint RequestID,uint Amount);
    event NewSwapRequest(uint RequestID, uint StationID, uint Cost);
    event SwapPaid(uint RequestID, uint Amount);
    event RequestApproved(uint RequestID);
    event RequestDenied(uint RequestID);
    event SwapConfirmed(uint RequestID);
    event StationRegistered(uint StationID);
        
    constructor() public{
        systemManager = msg.sender;
    }
    
    function registerStation(uint _stationID, string _stationAddress,address _operator) public managerOnly{
        require(stationExists[_stationID] == false);
        require(opToStation[_operator] ==0);
        stationIDs.push(_stationID);
        Station memory s = Station(_stationID,_stationAddress,new uint[](0));
        stationDetails[stationIDs.length -1] = s;
        opToStation[_operator] = _stationID;
        employeeList[_stationID]=_operator;
        stationExists[_stationID] = true;
        emit StationRegistered(_stationID);
    }
    
    function getStationIDs() public view returns(uint[]){
        return stationIDs;
    }
   
    //when someone wants to register a battery, he will push a button in the user interface, that button will trigger both functions from below.
    //I had to split the register in 2 parts because there were too many arguments for one function only and the stack would have been too deep => no compilation
    function registerBatteryStaticInfo(uint  _batteryID,
        string  _brand,
        string  _catalogName,
        string  _datasheetLink,
        uint _manufacturePrice,
        uint _maximumChargingCount,
        uint _maximumDischargingCount,
        uint _maximumChargingDuration,
        uint _maximumDischargingDuration,
        uint _manufactureDate) public {
        require(batteriesStaticInfo[_batteryID].exists ==false);
             
        batteriesStaticInfo[_batteryID] = StaticInfo(_batteryID,_brand,_catalogName,_datasheetLink,
        _manufacturePrice,_maximumChargingCount,_maximumDischargingCount,_maximumChargingDuration,_maximumDischargingDuration,
        _manufactureDate,true);
    }
    
    function registerBatteryDynamicInfo(
        uint _batteryID,
        uint _price,
        uint _actualChargingCount,
        uint _actualDischargingCount,
        uint _stationID
        ) public {
        
        if(_stationID != 0)require(opToStation[msg.sender] == _stationID);
        else require(owners[msg.sender] ==0);
        
        
        if(_stationID!=0){
            batteriesDynamicInfo[_batteryID] = DynamicInfo(_price,_actualChargingCount,_actualDischargingCount,msg.sender, _stationID);
            stationBatteries[_stationID].push(_batteryID);
            emit BatteryRegisteredToStation(_stationID,_batteryID);
        } else {
             batteriesDynamicInfo[_batteryID] = DynamicInfo(_price,_actualChargingCount,_actualDischargingCount,msg.sender, 0);
             owners[msg.sender] = _batteryID;
             emit BatteryRegisteredToOwner(_batteryID,msg.sender);
        }
        
    }
        
    //the swapping process goes as follows: the driver sends a 
    function sendSwapRequest(uint _requestedBateryID, uint _stationID) public{
        require(batteriesStaticInfo[_requestedBateryID].exists == true && batteriesDynamicInfo[_requestedBateryID].stationID == _stationID && owners[msg.sender] !=0);
        requests[requestID] = SwapRequest(msg.sender,now,owners[msg.sender],_requestedBateryID,_stationID,0,0,false,false,false,false);
        idToStation[_stationID].requests.push(requestID);
        myRequests[msg.sender].push(requestID);
        if(batteriesDynamicInfo[_requestedBateryID].price > batteriesDynamicInfo[owners[msg.sender]].price){
            requests[requestID].ownerCost = batteriesDynamicInfo[_requestedBateryID].price - batteriesDynamicInfo[owners[msg.sender]].price;
            emit OwnerCost(requestID,requests[requestID].ownerCost);
        } else {
            requests[requestID].stationCost = batteriesDynamicInfo[owners[msg.sender]].price -batteriesDynamicInfo[_requestedBateryID].price;
        }
        emit NewSwapRequest(requestID, _stationID,requests[requestID].stationCost);
        requestID ++;
    }
    
    function manageRequest(uint _requestID, bool accept) public payable operatorOnly{
        require(requests[_requestID].stationID == opToStation[msg.sender]);
        require(requests[_requestID].managed == false);
        if(accept == true) {
            if(requests[_requestID].stationCost>0 && requests[_requestID].ownerCost ==0){
                require(msg.value == requests[_requestID].stationCost);
                requests[_requestID].paid = true;
            }
            if(requests[_requestID].stationCost==0 && requests[_requestID].ownerCost ==0)requests[_requestID].paid = true;
            requests[_requestID].accepted = true;
            requests[_requestID].managed = true;
            emit RequestApproved(_requestID);
        } else {
            requests[_requestID].accepted = false;
            requests[_requestID].managed = true;
            emit RequestDenied(_requestID);
        }
    }
    
    function paySwap(uint _requestID) public payable{
        require(requests[_requestID].accepted == true);
        require(msg.value == requests[_requestID].ownerCost && requests[_requestID].sender == msg.sender);
        requests[_requestID].paid = true;
        emit SwapPaid(_requestID,msg.value);
    }
    
//the owner car detects that the swap has taken place and updates the dynamic info and sends the payment to the right party
    function confirmSwap(uint _requestID) public payable{
        require(requests[_requestID].paid == true);
        if(requests[_requestID].ownerCost != 0){
            employeeList[requests[_requestID].stationID].transfer(requests[_requestID].ownerCost);
        } else {
            requests[_requestID].sender.transfer(requests[_requestID].stationCost);
        }
        batteriesDynamicInfo[requests[_requestID].ownerBatteryID].ownerAddress = employeeList[requests[_requestID].stationID];
        batteriesDynamicInfo[requests[_requestID].ownerBatteryID].stationID = requests[_requestID].stationID;
        for(uint i=0;i <stationBatteries[requests[_requestID].stationID].length;i++){
            if(stationBatteries[requests[_requestID].stationID][i] == requests[_requestID].requestedBatteryID){
               stationBatteries[requests[_requestID].stationID][i] = requests[_requestID].ownerBatteryID;
                break;
            }
        }
        owners[requests[_requestID].sender] = requests[_requestID].requestedBatteryID;
        batteriesDynamicInfo[requests[_requestID].ownerBatteryID].actualDischargingCount++;
        batteriesDynamicInfo[requests[_requestID].ownerBatteryID].actualChargingCount++;
        requests[_requestID].confirmed = true;
        emit SwapConfirmed(_requestID);
        
    }
    
    function replaceBattery(uint[] batteries, uint oldID, uint newID) internal{
        for(uint i=0;i <batteries.length;i++){
            if(batteries[i] == oldID){
                batteries[i] = newID;
                break;
            }
        }
    }
    
    function getBatteriesFromStation(uint _stationID) public view returns(uint[]){
        return stationBatteries[_stationID];
    }
    
    function getRequestsFromStation(uint _stationID) public view returns(uint[]){
        return idToStation[_stationID].requests;
    }
    
    function getMyRequests(address addr) public view returns(uint []){
        
        return myRequests[addr];
    }
    function getBatteryStaticInfo(uint _batteryID) public view returns(string,string,string,uint,uint,uint,uint,uint,uint)  {
        StaticInfo memory s = batteriesStaticInfo[_batteryID];
        return(
            s.brand,
            s.catalogName,
            s.datasheetLink,
            s.manufacturePrice,
            s.maximumChargingCount,
            s.maximumDischargingCount,
            s.maximumChargingDuration,
            s.maximumDischargingDuration,
            s.manufactureDate
        );
    }
    
    function getBatteryDynamicInfo(uint _batteryID) public view returns(uint,uint,uint,address,uint){
        DynamicInfo memory d = batteriesDynamicInfo[_batteryID];
        return(
            d.price,
            d.actualChargingCount,
            d.actualDischargingCount,
            d.ownerAddress,
            d.stationID);
    }
        
}
    
