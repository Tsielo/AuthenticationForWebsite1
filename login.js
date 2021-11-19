function validate()
{
    var username=document .getelementByID("username").value;
    var password=document .getelementByID("password").value;
    if(username=="admin"&& password=="user")
{
    alert(login succesfully)
    return false;
}
        else
    {
    alert("login failed");
    }

}