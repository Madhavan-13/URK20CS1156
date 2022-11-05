&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;script src=&quot;https://code.angularjs.org/1.6.9/angular.js&quot;&gt;&lt;/script&gt;
        &lt;script&gt;
            var app = angular.module(&quot;app&quot;, []);
            app.controller(&quot;FrmController&quot;, function($scope)
            {
                $scope.comment = [];
                $scope.btn_add = function()
                {
                    if($scope.txtcomment !=&#39;&#39;)
                    {  
                        $scope.comment.push($scope.txtcomment);
                        $scope.txtcomment = &quot;&quot;;
                    }
                }
                $scope.remItem = function($index) {
                $scope.comment.splice($index, 1);}
            });
        &lt;/script&gt;
    &lt;/head&gt;
    &lt;body ng-app=&quot;app&quot;&gt;
        &lt;div id=&#39;dvl&#39;&gt;
            &lt;form ng-controller=&quot;FrmController&quot;&gt;
Post your Comment
                &lt;br&gt;
                &lt;form ng-controller=&quot;FrmController&quot;&gt;
                    &lt;textarea ng-model=&quot;txtcomment&quot; placeholder=&quot;Your Comment&quot;
style=&#39;width:550px&#39;&gt;&lt;/textarea&gt;
                    &lt;br&gt;
                    &lt;button ng-click=&#39;btn_add();&#39;style=&#39;margin-top:10px;&#39;&gt;Post
Comment&lt;/button&gt;
                    &lt;h4&gt;Comments&lt;/h4&gt;
                    &lt;ul&gt;
                        &lt;li ng-repeat=&quot;comnt in comment&quot;&gt; {{comnt}} &lt;a
style=&quot;float: right;&quot; href=&quot;&quot; ng-click=&quot;remItem($index)&quot;&gt;x&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/form&gt;
            &lt;/form&gt;
        &lt;/div&gt;
       
    &lt;/body&gt;
       
&lt;/html&gt;
