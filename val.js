function validation()
{
    var a = document.form.name.value;
    if(a=="")
    {
        alert("Please enter your name");
        document.form.name.focus();
        return false;
    }
    if(!isNaN(a))
    {
        alert("Please enter only character");
        document.form.name.select();
        return false;
    }    

    var pass = document.form.pass.value;
    var cpass = document.form.cpass.value;
    if(pass=='')
    {
        alert("Enter Password");
        document.form.pass.focus();
        return false;
    }
    if(pass.length<5)
    {
        alert("Password should have atlease 8 character");
        document.form.pass.focus();
        return false;
    }
    if(cpass=='')
    {
        alert("Enter Confirm Password");
        document.form.cpass.focus();
        return false;
    }
    if(cpass.length<5)
    {
        alert("Password should have atlease 8 character");
        document.form.cpass.focus();
        return false;
    }
    if(pass!=cpass)
    {
        alert("Password do not match");
        document.form.pass.focus();
        return false;
    }

    var rb = document.form.gender;
    var status = 0;
    for(var i=0;i<rb.length;i++)
    {
        if(rb[i].checked==true)
        {
            status=1;
        }
    }
    if(status == 0)
    {
        alert("Select the gender");
        return false;
    }

    var ck = document.form.branch;
    var status1 = 0;
    for(var i=0;i<ck.length;i++)
    {
        if(ck[i].checked==true)
        {
            status1=1;
        }
    }
    if(status1 == 0)
    {
        alert("Select the branch");
        return false;
    }

    var course = document.form.course;
    if(course.selectedIndex==0)
    {
        alert("Select your course");
        return false;
    }

    var state = document.form.state.value;
    if(state=="")
    {
        alert("Please enter your state");
        document.form.state.focus();
        return false;
    }

    var con_num = document.form.num.value;
    if(con_num=="")
    {
        alert("Please enter your number");
        document.form.num.focus();
        return false;
    }
    if(con_num.length<10)
    {
        alert("10 digits required");
        document.form.num.focus();
        return false;
    }
    var ads = document.form.address.value;
    if(ads=="")
    {
        alert("Please enter your address");
        return false;
    }
    return true;
}