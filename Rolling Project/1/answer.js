var user = 
{
    userName: null,
    password: null,
    age: null
};

var users = 
{
};

var group = 
{
    groupName: null,
    users: null
};

var groups = 
{
};

function getAllUserNames()
{
    return users.keys();
}

function createUser(userName, password, age)
{
    if( (userName in getAllUserNames()) )
        return;
    var newUser = {
        userName: userName,
        password: password,
        age: age
    };
    return newUser;
}

function addUser(userToAdd)
{
    if(userToAdd === "undefined")
        return;
    var userName = userToAdd.userName;    
    users.userName = userToAdd;
}

function deleteUser(userName)
{
    if(userName === "undefined" || !(userName in getAllUserNames()))
        return;
    delete users.userName;
}

function getAllGroupNames()
{
    return groups.keys();
}

function createGroup(groupName, usersArr)
{
    if( (groupName in getAllGroupNames()) )
        return;
    var newGroup = {
        groupName: groupName,
        users: usersArr
    };
    return newGroup;
}

function addGroup(groupToAdd)
{
    if(groupToAdd === "undefined")
        return;
    var groupName = groupToAdd.groupName;
    groups.groupName = groupToAdd;
}

function deleteGroup(groupName)
{
    if(groupName === "undefined" || !(groupName in getAllGroupsNames()))
        return;
    delete groups.groupName;
}

