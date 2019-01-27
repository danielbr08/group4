function User(userName,password,age) {
    this.userName = userName;
    this.password = password;
    this.age = age;

    this.setPassword = function(password){
        this.password = password;
    };
    this.setAge = function(age){
        this.age = age;
    };
};

function Users(){
    this.allUsers = new Array();
    this.createUser = function(userName, password, age)
    {

        if( !userName || (userName in this.getAllUserNames()) ){
            return;
        }
        return new User(userName,password,age);
    };

    this.addUser = function(userToAdd)
    {
        if(!userToAdd)
            return;
        var userName = userToAdd.userName;   
        if(this.getAllUserNames().some(item=> item === userName)){
            return;
        }
        this.allUsers.push(userToAdd);
    };

    this.deleteUser = function(userName)
    {
        var index = this.getUserIndex(userName)
        if(!userName || index === -1)
            return;
        this.allUsers.splice(index,1);
    };

    this.updateUser = function(userName,password,age)
    {
        var index = this.getUserIndex(userName)
        if(!userName || index === -1){
            console.log("The user is not exists!");
            return;
        }
        var user = this.allUsers[index];
        user.setPassword(password);
        user.setAge(age);
        this.allUsers[index] = user;
    };

    this.getAllUserNames = function()
    {
        var userNames = new Array();
        this.allUsers.forEach(element => {
            userNames.push(element.userName) 
        });
        return userNames;
    };
    
    this.getUserIndex = function(userName)
    {
        var userIndex = -1;
        this.allUsers.forEach( (element,index) => {
            if(element.userName ===  userName){
                userIndex = index;
                return userIndex;
            }
        });
        return userIndex;
    };

};

var users = new Users();
//var groups = new Groups();

var user1 = users.createUser("Daniel",1234,30);
var user2 = users.createUser("Uriel",2345,43);
var user3 = users.createUser("Nadav",3456,28);
var user4 = users.createUser("Michal",4567,32);

users.addUser(user1);
users.addUser(user2);
users.addUser(user3);
users.addUser(user4);
//console.log(users.getAllUserNames());
//console.log(users);


// users.updateUser("Michal",4321,40);
// console.log(users);

// users.deleteUser("Uriel");
// console.log(users.getAllUserNames());


function Group(groupName,users,subGroups){ 
    this.groupName = groupName;
    this.users = users;// Array of users
    this.subGroups = subGroups;// Array of subGroups

    this.createGroup = function(groupName,users,subGroups) {
        // if( this.users !== null){
        //     console.log("Users array of crator group is not empty!");
        //     return;
        // }
        // if( !groupName || (groupName in this.getAllGroupNames()) ){
        //     console.log("This name alraedy exists!");
        //     return;
        // }
        return new Group(groupName,users,subGroups);
    }

    this.addGroup = function(groupToAdd)
    {
        if( this.users !== null){
            console.log("Users array of creator group is not empty!");
            return;
        }
        var groupName = groupToAdd.groupName;
        if(this.isGroupNameExists(groupName)){
            console.log("This name already exists!");
            return;
        }
        if(this.subGroups === null){
            this.subGroups = new Array();
        }
        this.subGroups.push(groupToAdd);
    };

    this.isGroupNameExists = function(groupName){
        allGroupNames = this.getAllGroupNames().split(', ');
        return allGroupNames.some(item=> item === groupName);
    };

    this.deleteGroup = function(groupName){
        var group = getGroup(groupName);
        group = null;
    };

    this.getGroup = function(groupName){
        if(!groupName){
            return;
        }
        if(this.groupName === groupName){
            return this;
        }
        if(this.subGroups !== null){
            for(var i=0;i<this.subGroups.length;i++){
                element = this.subGroups[i];
                var group = element.getGroup(groupName)
                if(group !== undefined){
                    return group;
                }
            }
        }
    };

    this.getAllGroupNames = function()
    {
        if(this.subGroups === null){
            return this.groupName;
        }
        var groupNames = this.groupName;
        if(this.subGroups !== null){
            for(var i=0;i<this.subGroups.length;i++){
                element = this.subGroups[i];
                groupNames += ', ' + element.getAllGroupNames();
            }
        }
        return groupNames;
    };


};

// var group111 = new Group("Group111",[user1,user2],null);
// var group112 = new Group("Group112",[user3,user4],null);

// var group121 = new Group("Group121",[user1,user2],null);
// var group122 = new Group("Group122",[user3,user4],null);

//  var group11 =  new Group("Group11",null,[group111,group112]);
//  var group12 =  new Group("Group12",null,[group121,group122]);

//  var group1 = new Group("Group1",null,[group11,group12]);


var group1 = new Group("Group1",null,null);
var group11 = group1.createGroup("Group11",null,null);
group1.addGroup(group11);
var group12 = group1.createGroup("Group12",null,null);
group1.addGroup(group12);

var group111 = group11.createGroup("Group111",[user1,user2],null);
group11.addGroup(group111);

var group112 = group11.createGroup("Group112",[user3,user4],null);
group11.addGroup(group112);

var group121 = group12.createGroup("Group121",[user1,user2],null);
group12.addGroup(group121);

var group122 = group12.createGroup("Group122",[user3,user4],null);
group12.addGroup(group122);

group11.getAllGroupNames();
console.log(group1.getAllGroupNames().split(', '));
var e = group1.getGroup("Group121");
console.log(e);



//     this.getGroupIndex = function(groupName){
//         this.allGroups.forEach(element,index => {
//             if(element.groupName ===  groupName)
//                 return index;
//         });
//         return -1;
//     }

//     this.getUserIndex = function(group,userName){
//         var userIndexInGroup = -1;
//         if(!group){
//             return -1;
//         }
//         group.users.forEach(element,index => {
//             if(element.userName ===  userName){
//                 return index;
//             }
//         });
//         return -1;
//     }
// };

// function Association(users,groups){
//     this.users = users;
//     this.groups = groups;
    
//     this.add = function(userName,groupName){
//         if(!this.users.getAllUserNames.some(_userName=> _userName === userName)){
//             console.log("The user is not exists!");
//             return;
//         }
//         if(!this.groups.getAllGroupNames.some(_groupName=> _groupName === groupName)){
//             console.log("The group is not exists!");
//             return;
//         }
//         var userIndex = this.users.getUserIndex(userName);
//         var groupIndex = this.users.getGroupIndex(groupName);

//         var group = this.groups.allGroups[groupIndex];
//         var user = this.users.allUsers[userIndex];

//         if(group.users.some(_user=> _user.userName === userName)){
//             console.log("The user already associated to this group!");
//             return;
//         }
//         group.users.push(user);// Need to check it by value or by reference
//     }

//     this.remove = function(userName,groupName){
//         if(!this.users.getAllUserNames.some(_userName=> _userName === userName)){
//             console.log("The user is not exists!");
//             return;
//         }
//         if(!this.groups.getAllGroupNames.some(_groupName=> _groupName === groupName)){
//             console.log("The group is not exists!");
//             return;
//         }

//         var groupIndex = this.users.getGroupIndex(groupName);
//         var group = this.groups.allGroups[groupIndex];

//         if(!group.users.some(_user=> _user.userName === userName)){
//             console.log("The user is not associated to this group!");
//             return;
//         }

//         var indexUserInGroup = getUserIndex(group,userName);
//         group.users.splice(indexUserInGroup,1);// Need to check it by value or by reference
//     }

// }
