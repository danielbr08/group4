function User(userName,password,age) {
    this.userName = userName;
    this.password = password;
    this.age = age;

    this.setPassword = function(password){
        this.password = paswword;
    };
    this.setAge = function(age){
        this.age = age;
    };
};

function Users(){
    this.allUsers = new Array();// Array of users
    this.createUser = function(userName, password, age)
    {

        if( !userName || (userName in getAllUserNames()) ){
            return;
        }
        return new User(userName,password,age);
    };

    this.addUser = function(userToAdd)
    {
        if(!userToAdd)
            return;
        var userName = userToAdd.userName;   
        if(this.getAllUserNames.some(item=> item === userName)){
            return;
        }
        this.allUsers.push(userToAdd);
    };

    this.deleteUser = function(userName)
    {
        var index = getUserIndex(userName)
        if(!userName || index === -1 || !(userName in getAllUserNames()))
            return;
        delete allUsers.splice(index,1);
    };

    this.updateUser = function(userName,password,age)
    {
        var index = getUserIndex(userName)
        if(!userName || index === -1 || !(userName in getAllUserNames())){
            console.log("The user is not exists!");
            return;
        }
        var user = allUsers[index];
        user.setPassword(password);
        user.setAge(age);
        allUsers[index] = user;
    };

    this.getAllUserNames = function()
    {
        var userNames = new Array();
        allUsers.forEach(element => {
            userNames.push(element.userName) 
        });
        return userNames;
    }
    
    this.getUserIndex = function(userName)
    {
        allUsers.forEach(element,index => {
            if(element.userName ===  userName)
                return index;
        });
        return -1;
    }

};

function Group(groupName,users){ 
    this.groupName = groupName;
    this.users = users;
};

function groups(){
    this.allGroups = new Array();// Array of groups

    this.createGroup = function(groupName, usersArr)
    {
        if( !groupName || (groupName in getAllGroupNames()) )
            return;
        return new Group(groupName,usersArr);
    };

    this.addGroup = function(groupToAdd)
    {
        if(!groupToAdd || !(groupToAdd.name in getAllGroupNames()))
            return;
        var groupName = groupToAdd.groupName;
        if(this.getAllGroupNames.some(item=> item === groupName)){
            return;
        }
        allGroups.push(groupToAdd);
    };

    this.deleteGroup = function(groupName){
        var index = getIndexFromArray(groupName)
        if(!groupName  || index ===-1 || !(groupName in getAllGroupsNames()))
            return;
        delete allGroups.splice(index,1);
    };

    this.getAllGroupNames = function()
    {
        var groupNames = new Array();
        allGroups.forEach(element => {
            groupNames.push(element.name) 
        });
        return groupNames;
    };

    this.getGroupIndex = function(groupName){
        allGroups.forEach(element,index => {
            if(element.groupName ===  groupName)
                return index;
        });
        return -1;
    }

    this.getUserIndex = function(group,userName){
        var userIndexInGroup = -1;
        if(!group){
            return -1;
        }
        group.users.forEach(element,index => {
            if(element.userName ===  userName){
                return index;
            }
        });
        return -1;
    }
};

var users = new Users();
var groups = new Groups();

function Association(users,groups){
    this.users = users;
    this.groups = groups;
    
    this.add = function(userName,groupName){
        if(!this.users.getAllUserNames.some(_userName=> _userName === userName)){
            console.log("The user is not exists!");
            return;
        }
        if(!this.groups.getAllGroupNames.some(_groupName=> _groupName === groupName)){
            console.log("The group is not exists!");
            return;
        }
        var userIndex = this.users.getUserIndex(userName);
        var groupIndex = this.users.getGroupIndex(groupName);

        var group = this.groups.allGroups[groupIndex];
        var user = this.users.allUsers[userIndex];

        if(group.users.some(_user=> _user.userName === userName)){
            console.log("The user already associated to this group!");
            return;
        }
        group.users.push(user);// Need to check it by value or by reference
    }

    this.remove = function(userName,groupName){
        if(!this.users.getAllUserNames.some(_userName=> _userName === userName)){
            console.log("The user is not exists!");
            return;
        }
        if(!this.groups.getAllGroupNames.some(_groupName=> _groupName === groupName)){
            console.log("The group is not exists!");
            return;
        }

        var groupIndex = this.users.getGroupIndex(groupName);
        var group = this.groups.allGroups[groupIndex];

        if(!group.users.some(_user=> _user.userName === userName)){
            console.log("The user is not associated to this group!");
            return;
        }

        var indexUserInGroup = getUserIndex(group,userName);
        group.users.splice(indexUserInGroup,1);// Need to check it by value or by reference
    }

}

