import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout' //布局页



Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [{
		path: '/login',
		component: () => import('@/views/login/Login'),
		hidden: true //导航菜单忽略选项
	},
	{
		path: '',
		component: Layout, //应用布局页
		redirect: '/index',
		hidden: true,
	},
	{
		path: '/index',
		component: Layout, //应用布局页
		name: 'index',
		meta: {
			title: "首页", //导航菜单项标题
			icon: 'el-icon-s-home' //导航菜单图标
		},
		children: [{
			path: '',
			component: () => import('@/views/index/index.vue'),
			name: 'indexs',
			meta: {
				title: "首页",
				icon: 'el-icon-s-home',
				roles: ['admin', 'jerry']
			}
		}]
	}
]

// 动态路由 communication
export const asyncRoutes = [
	{
		path: '/order',
		component: Layout,
		redirect: '/order/index',
		meta: {
			title: "订单管理",
			icon: 'el-icon-s-goods',
			hidden: false,
		},
		children: [{
				path: 'index',
				component: () => import('@/views/order/Index.vue'),
				name: 'orderindex',
				meta: {
					title: "订单列表",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'fromgood',
				component: () => import('@/views/order/FromGood.vue'),
				name: 'fromgood',
				meta: {
					title: "添加(编辑产品)",
					icon: 'el-icon-tickets',
					hidden: true,
					roles: ['admin', 'jerry'],

				}
			},
			{
				path: 'onindex',
				component: () => import('@/views/order/Packing.vue'),
				name: 'packing',
				meta: {
					title: "装箱列表",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'draft',
				component: () => import('@/views/order/Draft.vue'),
				name: 'draft',
				meta: {
					title: "草稿箱",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
		]
	},
	{
		path: '/warehouse',
		component: Layout,
		redirect: '/warehouse/domestic',
		meta: {
			title: "仓库管理",
			icon: 'el-icon-s-help',
			hidden: false,
		},
		children: [{
				path: 'domestic',
				component: () => import('@/views/warehouse/Domestic.vue'),
				name: 'domestic',
				meta: {
					title: "国内仓库",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'abroad',
				component: () => import('@/views/warehouse/Abroad.vue'),
				name: 'abroad',
				meta: {
					title: "国外仓库",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
		]
	},
	{
		path: '/customersAgents',
		component: Layout,
		redirect: '/customersAgents/customers',
		meta: {
			title: "客户与代理",
			icon: 'el-icon-s-platform',
			hidden: false,
		},
		children: [{
				path: 'customers',
				component: () => import('@/views/customersAgents/Customers.vue'),
				name: 'customers',
				meta: {
					title: "客户管理",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'agents',
				component: () => import('@/views/customersAgents/Agents.vue'),
				name: 'agents',
				meta: {
					title: "代理管理",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'supplier',
				component: () => import('@/views/customersAgents/Supplier.vue'),
				name: 'supplier',
				meta: {
					title: "供应商管理",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
		]
	},
	{
		path: '/channel',
		component: Layout,
		redirect: '/channel/channelList',
		meta: {
			title: "渠道管理",
			icon: 'el-icon-s-help',
			hidden: false,
		},
		children: [{
				path: 'channelList',
				component: () => import('@/views/channel/channelList.vue'),
				name: 'channelList',
				meta: {
					title: "渠道列表",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'motherChannel',
				component: () => import('@/views/channel/motherChannel.vue'),
				name: 'motherChannel',
				meta: {
					title: "母渠道设置",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'freight',
				component: () => import('@/views/channel/Freight.vue'),
				name: 'freight',
				meta: {
					title: "运费试算",
					icon: 'el-icon-message',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
		]
	},
	{
		path: '/finance',
		component: Layout,
		redirect: '/finance/index',
		meta: {
			title: "财务管理",
			icon: 'el-icon-s-goods',
			hidden: false,
		},
		children: [{
				path: 'index',
				component: () => import('@/views/finance/Index.vue'),
				name: 'goodsindex',
				meta: {
					title: "财务报表",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'report',
				component: () => import('@/views/finance/Report.vue'),
				name: 'onindex',
				meta: {
					title: "应收管理",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'cope',
				component: () => import('@/views/finance/Cope.vue'),
				name: 'offindex',
				meta: {
					title: "应付管理",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'costAccounting',
				component: () => import('@/views/finance/CostAccounting.vue'),
				name: 'costAccounting',
				meta: {
					title: "成本核算",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
		]
	}, 
	{
		path: '/notepad',
		component: Layout,
		meta: {
			title: "记事本",
			icon: 'el-icon-s-goods',
			name: 'notepad',
		},children: [{
				path: '',
				component: () => import('@/views/notepad/Index.vue'),
				meta: {
					title: "记事本",
					icon: 'el-icon-tickets',
					roles: ['admin', 'jerry']
				}
			}]
},
	{
		path: '/basicData',
		component: Layout,
		redirect: '/basicData/index',
		meta: {
			title: "基础数据",
			icon: 'el-icon-user-solid',
			hidden: false,
		},
		children: [{
				path: 'index',
				component: () => import('@/views/basicData/Index.vue'),
				name: 'userindex',
				meta: {
					title: "用户管理",
					icon: 'el-icon-user-solid',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'Dictionaries',
				component: () => import('@/views/basicData/Dictionaries.vue'),
				name: 'dictionaries',
				meta: {
					title: "字典管理",
					icon: 'el-icon-message-solid',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
		]
	},
	{
		path: '/analyze',
		component: Layout,
		redirect: '/goods/index',
		meta: {
			title: "数据分析",
			icon: 'el-icon-s-marketing',
			hidden: false
		},
		children: [{
				path: 'analyzeindex',
				component: () => import('@/views/analyze/Index.vue'),
				name: 'analyzeindex',
				meta: {
					title: "主控数据",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
			{
				path: 'analyzemonitor',
				component: () => import('@/views/analyze/Monitor.vue'),
				name: 'analyzemonitor',
				meta: {
					title: "监控数据",
					icon: 'el-icon-tickets',
					hidden: false,
					roles: ['admin', 'jerry']
				}
			},
		]
	},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: constRouter
})

export default router
