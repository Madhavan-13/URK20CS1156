<!DOCTYPE html>
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js" type="text/javascript">
      </script>
    </head>
    
    <body ng-app="" style="color: blue;">
        <div style="position: relative;left: 40%;">
            <h1>CHRISTMAS MEGAPLAY REGISTERATION</h1>
            <form name='myform'>
                Name<span style="color: red;">*</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='text' name="myName" ng-model="name" required pattern="[a-z,A-Z]{1,}">
                    <span style="color: red;" ng-show="myform.myName.$error.required">Name is required</span>
                    <span style="color: red;" ng-show="myform.myName.$error.pattern">Name is invalid</span>
                <br>
                <br>

                Register Number<span style="color: red;">*</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='test' name="myreg" ng-model="reg">
                    <span style="color: red;" ng-show="myform.myreg.$error.required">Register Number is required</span>
                <br>
                <br>

                Year of Study<span style="color: red;">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='radio' name="myyear" ng-model="year" value="1st" required>1st
                    <input type='radio' name="myyear" ng-model="year" value="2nd" required>2nd
                    <input type='radio' name="myyear" ng-model="year" value="3rd" required>3rd
                    <input type='radio' name="myyear" ng-model="year" value="4th" required>4th
                    <span style="color: red;" ng-show="myform.myyear.$error.required">Gender is required</span>
                <br>
                <br>
                
                Age<span style="color: red;">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='number' name="myAge" ng-model="Age" required min="18" max="30">
                    <span style="color: red;" ng-show="myform.myAge.$error.required">Age is required</span>
                    <span style="color: red;" ng-show="myform.myAge.$error.min">Age is invalid</span>
                    <span style="color: red;" ng-show="myform.myAge.$error.max">Age is invalid</span>
                <br>
                <br>

                Mobile Number<span style="color: red;">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='tel' name="mynumber" ng-model="Number" required pattern="[0-9]{10}">
                    <span style="color: red;" ng-show="myform.mynumber.$error.required">Mobile number is required</span>
                    <span style="color: red;" ng-show="myform.mynumber.$error.pattern">Mobile number is invalid</span>
                <br>
                <br>

                Email<span style="color: red;">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='email' name="myemail" ng-model="email" required>
                    <span style="color: red;" ng-show="myform.myemail.$error.required">Email is required</span>
                    <span style="color: red;" ng-show="myform.myemail.$error.email">Email is invalid</span>
                <br>
                <br>

                Gender<span style="color: red;">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='radio' name="mygender" ng-model="Gender" value="Male" required>Male
                    <input type='radio' name="mygender" ng-model="Gender" value="Female" required>Female
                    <span style="color: red;" ng-show="myform.mygender.$error.required">Gender is required</span>
                <br>
                <br>

                Activity<span style="color: red;">*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select name="myactivity" ng-model="activity" required>
                        <option value="Dance">Dance</option>
                        <option value="Choir">Choir</option>
                        <option value="Background">Background</option>
                        <option value="Acting">Acting</option>
                    </select>
                    <span style="color: red;" ng-show="myform.myactivity.$error.required">Ativity is required</span>
                <br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button ng-disabled="myform.$invalid" >submit</Button>
            </form>    
        </div>
    </body>
</html>
