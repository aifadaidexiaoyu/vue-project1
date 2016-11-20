<template>
	<div class="global-wrap">
		<div class="app app-header-fixed" id="app">
    		<div class="app-header navbar">   
      			<div class="navbar-header bg-dark">
        			<a href="#/" class="navbar-brand text-lt">
          				<i class="fa fa-line-chart"></i>
          				<span class="hidden-folded m-l-xs title">{{title}}</span>
        			</a>
      			</div>
      			<div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
        			<div class="nav navbar-nav hidden-xs">
          				<a href="#" class="btn no-shadow navbar-btn"  data-toggle="class:app-aside-folded" data-target=".app">
            				<i class="fa fa-reply fa-fw text"></i> 
            				<i class="fa fa-mail-forward fa-fw text-active"></i>
          				</a>
          				<a href class="btn no-shadow navbar-btn">
            				<i class="fa fa-user fa-fw"></i>
          				</a>
        			</div>
        			<ul class="nav navbar-nav hidden-sm">
			          	<li class="dropdown pos-stc">
			            	<a href="#" data-toggle="dropdown" class="dropdown-toggle">
			              		<span>vuex</span> 
			              		<span class="caret"></span>
			            	</a>
			            	<div class="dropdown-menu wrapper w-full bg-white">
			              		<div class="row">
					                <div class="col-sm-4">
					                  	<div class="m-l-xs m-t-xs m-b-xs font-bold">
					                  		内容<span class="badge badge-sm bg-success">10</span>
					                  	</div>
					                  	<div class="row">
					                    	<div class="col-xs-6">
					                      		<ul class="list-unstyled l-h-2x">
					                        		<li>
					                          			<a><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>什么是vuex</a>
					                        		</li>
					                        		<li>
					                        			<a><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>应用结构</a>
					                        		</li>
					                        		<li>
					                          			<a><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>插件</a>
					                        		</li>
					                        		<li>
					                          			<a><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>严格模式</a>
					                        		</li> 
					                      		</ul>
					                    	</div>
					                    	<div class="col-xs-6">
					                      		<ul class="list-unstyled l-h-2x">
					                        		<li>
					                          			<a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>表单处理</a>
					                        		</li>
							                        <li>
							                          	<a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>测试</a>
							                        </li>
							                        <li>
							                          	<a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>热重载</a>
							                        </li>
				                        			<li>
						                          		<a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>API参考</a>
				                        			</li>
				                      			</ul>
				                    		</div>
				                  		</div>
				                	</div>
						            <div class="col-sm-4 b-l b-light">
						                <div class="m-l-xs m-t-xs m-b-xs font-bold">
						                	API文档 <span class="label label-sm bg-primary">6</span>
						                </div>
						                <div class="row">
							                <div class="col-xs-6">
							                    <ul class="list-unstyled l-h-2x">
							                        <li>
							                        	<a href>
							                        		<i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>
							                        		Vuex.Store
							                        	</a>
							                        </li>
						                        	<li>
						                        		<a href>
						                        			<i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>
						                          			构造选项
						                          			<span class="badge badge-sm bg-warning">1+</span>
						                          		</a>
						                        	</li>
						                        	<li>
							                          	<a href>
							                          		<i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>
							                          		Instance Properties
							                          	</a>
						                        	</li>
						                        	<li>
						                          		<a href>
						                          			<i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>
						                          			实例方法
						                          		</a>
				                        			</li>
				                      			</ul>
				                    		</div>
				                    		<div class="col-xs-6">
				                      			<ul class="list-unstyled l-h-2x">
				                        			<li>
							                          	<a href>
							                          		<i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>
							                         		组件绑定助手
							                          	</a>
				                        			</li>
				                        			<li>
				                          				<a href>
				                          					<i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>
				                          					最后
				                          				</a>
				                        			</li> 
				                      			</ul>
				                    		</div>
				                  		</div>
				                	</div> 
				              	</div>
				            </div>
				        </li>
				        <li class="dropdown">
				            <a href="#" data-toggle="dropdown" class="dropdown-toggle">
				              	<i class="fa fa-fw fa-plus visible-xs-inline-block"></i>
				              	<span >webpack</span> <span class="caret"></span>
				            </a>
				            <ul class="dropdown-menu" role="menu">
				             	<li><a href="#">概念</a></li>
				              	<li>
				                	<a href>
				                  		<span class="badge bg-info pull-right">5</span>
				                  		<span>配置</span>
				                	</a>
				              	</li>
				              	<li><a href>怎么做</a></li>
				              	<li class="divider"></li>
				              	<li>
				                	<a href>
				                  		<span class="badge bg-danger pull-right">4</span>
				                  		<span>API</span>
				                	</a>
				              	</li>
				           	</ul>
				        </li>
				    </ul>
				    <form class="navbar-form navbar-form-sm navbar-left shift" data-target=".navbar-collapse" role="search">
				        <div class="form-group">
				            <div class="input-group">
				              	<input type="text" class="form-control input-sm bg-light no-border rounded padder" placeholder="搜索.." >
				              	<span class="input-group-btn">
				                	<button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>
				              	</span>
				            </div>
				        </div>
				    </form>
				    <ul class="nav navbar-nav navbar-right">
				        <li class="dropdown">
				            <a href="#" class="dropdown-toggle">
				              	<i class="fa fa-comment-o fa-fw"></i>
				              	<span class="visible-xs-inline">Notifications</span>
				              	<span class="badge badge-sm up bg-danger pull-right-xs">2</span>
				            </a>				    
				        </li>
				        <li class="dropdown">
				        <a href="#" class="dropdown-toggle clear" data-toggle="dropdown">
				            <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
				                <img src="/static/img/me.jpg">
				                <i class="on md b-white bottom"></i>
				            </span>
				            <span class="hidden-sm hidden-md">小鱼</span> <b class="caret"></b>
				        </a>
				        <ul class="dropdown-menu animated fadeInRight w">
				            <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">
				                <div>
				                  	<p>爱发呆的小鱼</p>
				                </div>
				                <progressbar value="60" class="progress-xs m-b-none bg-white"></progressbar>
				            </li>
				            <li>
				                <a href>
				                  <span class="badge bg-danger pull-right">30%</span>
				                  <span>设置</span>
				                </a>
				            </li>
				            <li><a>帮助</a></li>
				            <li><a><span class="label bg-info pull-right">new</span>收藏</a></li>
				            <li class="divider"></li>
				            <li><a>退出</a></li>
				        </ul>
				    </li>
				</ul>
	      	</div>
	    </div>

	    <div class="app-aside hidden-xs bg-dark">
			<div class="aside-wrap">
			    <div class="navi-wrap">		     
					<!-- 左侧树形菜单 -->
					<nav ui-nav class="navi">
					    <ul class="nav">
					        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
					            <span>vue学习</span>
					        </li>
					        <li>
					            <a href class="auto">      
					                <span class="pull-right text-muted">
					                    <i class="fa fa-fw fa-angle-right text"></i>
					                    <i class="fa fa-fw fa-angle-down text-active"></i>
					                </span>
					                <i class="glyphicon glyphicon-plus-sign icon text-primary-dker"></i>
					                <span class="font-bold">安装</span>
					            </a>
					            <ul class="nav nav-sub dk">
					                <li class="nav-sub-header"><a href><span>安装</span></a></li>
					                <li><a href><span>方法1</span></a></li>
					                <li><a href><b class="label bg-info pull-right">N</b><span>方法2</span></a></li>
			                	</ul>
			              	</li>
				            <li>
				                <a>
				                  	<i class="glyphicon glyphicon-asterisk icon text-info-dker"></i>
				                  	<span class="font-bold">介绍</span>
				                </a>
				            </li>
				            <li>
				                <a>
				                  	<b class="badge bg-info pull-right">9</b>
				                  	<i class="glyphicon glyphicon-th icon text-info-lter"></i>
				                  	<span class="font-bold">vue实例</span>
				                </a>
				            </li>
				            <li>
				                <a href class="auto">
				                  	<span class="pull-right text-muted">
				                    	<i class="fa fa-fw fa-angle-right text"></i>
				                    	<i class="fa fa-fw fa-angle-down text-active"></i>
				                  	</span>
				                  	<i class="glyphicon glyphicon-th-large icon text-success"></i>
				                  	<span class="font-bold">模板语法</span>
				                </a>
				                <ul class="nav nav-sub dk">
				                  	<li class="nav-sub-header"><a href><span>模板</span></a></li>
				                 	<li><a><span>计算属性</span></a></li>
				                  	<li><a><span>条件</span></a></li>
				                  	<li><a><span>列表</span></a></li>
				                </ul>
				            </li>
				            <li class="line dk"></li>
				            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
				                <span>进阶</span>
				            </li>
				            <li>
				                <a href class="auto">      
				                  	<span class="pull-right text-muted">
				                    	<i class="fa fa-fw fa-angle-right text"></i>
				                    	<i class="fa fa-fw fa-angle-down text-active"></i>
				                  	</span>
				                  	<b class="badge bg-info pull-right">3</b>
				                  	<i class="glyphicon glyphicon-th"></i>
				                  	<span>过渡</span>
				                </a>
				                <ul class="nav nav-sub dk">
				                  	<li class="nav-sub-header"><a href><span>过渡</span></a></li>
				                  	<li><a><span>过渡效果</span></a></li>
				                  	<li><a><span>过渡状态</span></a></li>
				                  	<li><a><span>实例</span></a></li>      
				                </ul>
				            </li>
				            <li>
				                <a href class="auto">
				                  	<span class="pull-right text-muted">
				                    	<i class="fa fa-fw fa-angle-right text"></i>
				                    	<i class="fa fa-fw fa-angle-down text-active"></i>
				                  	</span>
				                  	<i class="glyphicon glyphicon-inbox icon"></i>
				                  	<span>路由</span>
				                </a>
				                <ul class="nav nav-sub dk">
				                  	<li class="nav-sub-header"><a ><span>路由</span></a></li>
				                 	<li><a><span>动态路由匹配</span></a></li>
				                  	<li>
				                    	<a>
				                      		<b class="badge bg-info pull-right">3</b>
				                      		<span>嵌套路由</span>
				                    	</a>
				                  	</li>
				                  	<li><a><span>编程式导航</span></a></li>
				                  	<li >
				                    	<a >
				                      		<b class="badge bg-success pull-right">13</b>
				                      		<span>命令路由</span>
				                      	</a>
				                    </li>
				                  	<li ><a ><b class="badge bg-primary pull-right">16</b><span>重定向和别名</span></a></li>
				                  	<li><a><span>History 模式</span></a></li>
				                  	<li><a><span>导航钩子</span></a></li>
				                  	<li ><a><span>路由元信息</span></a></li>
				                  	<li ><a><span>过渡动效</span></a></li>
				                  	<li ><a><span>数据获取</span></a></li>
				                  	<li ><a><span>滚动行为</span></a></li>
				                  	<li ><a><span>懒加载</span></a></li>
				                </ul>
				            </li>
				            <li>
				                <a href class="auto">
				                  	<span class="pull-right text-muted">
				                    	<i class="fa fa-fw fa-angle-right text"></i>
				                    	<i class="fa fa-fw fa-angle-down text-active"></i>
				                  	</span>
				                  	<b class="label bg-primary pull-right">2</b>
				                  	<i class="glyphicon glyphicon-list"></i>
				                  	<span>自定义指令</span>
				                </a>
				                <ul class="nav nav-sub dk">
					                <li class="nav-sub-header"><a href><span>自定义指令</span></a></li>
					                <li><a><span>构造函数</span></a></li>
					                <li><a><span>钩子函数参数</span></a></li>
					                <li><a><span>函数简写</span></a></li>
					                <li><a><span>对象自变量</span></a></li>
				            	</ul>
				            </li>
				            <li>
				                <a href class="auto">
				                  	<span class="pull-right text-muted">
				                    	<i class="fa fa-fw fa-angle-right text"></i>
				                    	<i class="fa fa-fw fa-angle-down text-active"></i>
				                  	</span>
				                  	<i class="glyphicon glyphicon-random"></i>
				                  	<span>混合</span>
				                </a>
				                <ul class="nav nav-sub dk">
				                  	<li class="nav-sub-header">
				                    	<a><span>混合</span></a>
				                  	</li>
				                  	<li>
				                    	<a><span>基础</span></a>
				                    </li>
					                <li>
					                    <a><span>选项合并</span></a>
				                    </li>
					                <li>
					                    <a><span>全局混合</span></a>
				                  	</li>
					                <li>
					                    <a><span>自定义选项混合</span></a>
				                  	</li>
				                </ul>
				            </li>
				            <li>
				                <a>
				                  <i class="glyphicon glyphicon-signal"></i>
				                  <span>插件</span>
				                </a>
				            </li>
						    <li>
						        <a href class="auto">
						            <span class="pull-right text-muted">
							            <i class="fa fa-fw fa-angle-right text"></i>
							            <i class="fa fa-fw fa-angle-down text-active"></i>
						            </span>
						            <i class="glyphicon glyphicon-file icon"></i>
						            <span>环境部署</span>
						        </a>
					            <ul class="nav nav-sub dk">
					                <li class="nav-sub-header">
					                    <a href><span>环境部署</span></a>
					                </li>
					                <li>
					                    <a><span>删除警告</span></a>
					                </li>
					                <li>
					                    <a ><span>跟踪运行时错误</span></a>
					                </li>
					                <li>
					                    <a ><span>提取css</span></a>
					                </li>
	                			</ul>
	              			</li>
	              			<li class="line dk hidden-folded"></li>
	              			<li class="hidden-folded padder m-t m-b-sm text-muted text-xs">          
	                			<span>更多</span>
	              			</li>  
	              			<li>
	                			<a >
	                  				<i class="fa fa-arrows-h fa-fw text-success-lter"></i>
	                  				<b class="badge bg-success pull-right">30%</b>
	                  				<span >对比其他框架</span>
	                			</a>
	              			</li>
	              			<li>
	                			<a><i class="fa fa-send fa-fw"></i><span>加入vue社区</span></a>
	              			</li>
	            		</ul>
	          		</nav>
	          		<!-- nav -->

	          		<!-- aside footer -->
	          		<div class="wrapper m-t">
	            		<div class="text-center-folded">
	              			<span class="pull-right pull-none-folded">90</span>
	              			<span class="hidden-folded">热情</span>
	            		</div>
	            		<div class="progress progress-xxs m-t-sm dk">
	              			<div class="progress-bar progress-bar-info" style="width: 90%;"></div>
	            		</div>
		           	 	<div class="text-center-folded">
		             	 	<span class="pull-right pull-none-folded">50%</span>
		              		<span class="hidden-folded">进度</span>
		            	</div>
		            	<div class="progress progress-xxs m-t-sm dk">
		                	<div class="progress-bar progress-bar-primary" style="width: 50%;"></div>
		            	</div>
		          	</div>
	        	</div>
	      	</div>
	    </div> 
		<transition name="fade" mode="out-in">
			<router-view class="view"></router-view>
		</transition>
	</div>
</template>

<script>
	export  default{
	  name: 'title',
	  data () {
	    return {
	      title: 'vue.js'
	    }
	  }
	}
</script>

