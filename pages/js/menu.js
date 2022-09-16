var SystemMenu = [{
	title: '系统管理',
	icon: '&#xe646;',
	isCurrent: true,
	menu: [{
		title: '基础数据',
		icon: '&#xe620;',
		href: 'workbench.html',
		isCurrent: true,
		children: [{
			title: '首页',
			href: 'workbench.html',
			isCurrent: true
		},{
			title: '收派标准',
			href: 'basicData/deliveryStandard.html'
		},{
			title: '基础档案',
			href: 'basicData/basicArchives.html'
		},{
			title: '班车设置',
			href: 'basicData/shuttleBusSet.html'
		},{
			title: '取派员设置',
			href: 'basicData/dispatchingPersonnelSet.html'
		},{
			title: '区域设置',
			href: 'basicData/areaSet.html'
		},{
			title: '管理分区',
			href: 'basicData/partition.html'
		},{
			title: '管理定区',
			href: 'basicData/zone.html'
		},{
			title: '收派时间管理',
			href: 'basicData/deliveryTime.html'
		}]
	},{
		title: '权限管理',
		icon: '&#xe62f;',
		children: [{
			title: '单位管理',
			href: 'systemManagement/sysUnit.html'
		},{
			title: '员工管理',
			href: 'systemManagement/sysEmp.html'
		},{
			title: '栏目管理',
			href: 'systemManagement/sysMenu.html'
		},{
			title: '角色管理',
			href: 'systemManagement/sysRole.html'
		}]

	}]
},{
	title: '取派',
	icon: '&#xe63f;',
	menu: [{
		title: '受理',
		icon: '&#xe62f;',
		isCurrent: true,
		children: [{
			title: '业务受理',
			href: 'acceptance/businessAcceptance.html'
		},{
			title: '工作单快速录入',
			href: 'acceptance/worksheetQuickInput.html'
		},{
			title: '工作单查询',
			href: 'acceptance/worksheetQuery.html'
		}]
	},{
		title: '调度',
		icon: '&#xe62f;',
		children: [{
			title: '查台转单',
			href: 'dispatch/checkTable.html'
		},{
			title: '人工调度',
			href: 'dispatch/manualScheduling.html'
		},{
			title: '签收录入',
			href: 'dispatch/signInput.html'
		},{
			title: '取消签收申请确认',
			href: 'dispatch/cancelSignApplicationConfirmation.html'
		},{
			title: '宣传任务',
			href: 'dispatch/propagandaTask.html'
		}]
	},{
		title: '返货',
		icon: '&#xe62f;',
		children: [{
			title: '返货申请',
			href: 'return/returnApply.html'
		},{
			title: '返货申请确认',
			href: 'return/returnApplyConfirm.html'
		},{
			title: '成生返货单',
			href: 'return/returnInvoiceProduce.html'
		}/**,{
			title: '异调工作单',
			href: 'return/oddAdjustmentWorksheet.html'
		}**/]
	},{
		title: '包装材料管理',
		icon: '&#xe647;',
		children: [{
			title: '包装材料物品管理',
			href: 'packagingMaterialManagement/packagingMaterialManagement.html'
		},{
			title: '入库管理',
			href: 'packagingMaterialManagement/warehousingManagement.html'
		},{
			title: '出库管理',
			href: 'packagingMaterialManagement/outboundManagement.html'
		},{
			title: '库存管理',
			href: 'packagingMaterialManagement/inventoryManagement.html'
		}]
	},{
		title: '包装',
		icon: '&#xe611;',
		children: [{
			title: '包装信息录入',
			href: 'packing/packagingInformationInput.html'
		},{
			title: '包装信息查询',
			href: 'packing/packagingInformationQuery.html'
		}]
	},{
		title: '大物流管理',
		icon: '&#xe62f;',
		children: [{
			title: '大物流发货对照表',
			href: 'largeLogisticsManagement/invoiceComparisonTable.html'
		}]
	}]
},{
	title: '中转',
	icon: '&#xe646;',
	menu: [{
		title: '分拣管理',
		icon: '&#xe62f;',
		isCurrent: true,
		children: [{
			title: '入库',
			href: 'sortingManagement/storage.html'
		},{
			title: '出库',
			href: 'sortingManagement/theLibrary.html'
		},{
			title: '盘库',
			href: 'sortingManagement/check.html'
		},{
			title: '合包',
			href: 'sortingManagement/package.html'
		},{
			title: '拆包',
			href: 'sortingManagement/unpacking.html'
		},{
			title: '出入库查询',
			href: 'sortingManagement/outOfStorageQuery.html'
		},{
			title: '库存查询',
			href: 'sortingManagement/stockQuery.html'
		},{
			title: '合包查询',
			href: 'sortingManagement/packageQuery.html'
		},{
			title: '单货异常监控',
			href: 'sortingManagement/singleCargoExceptionMonitoring.html'
		}]
	},{
		title: '进出港管理',
		icon: '&#xe62f;',
		children: [{
			title: '出港配载',
			href: 'portEntryManagement/departureStowage.html'
		},{
			title: '提货管理',
			href: 'portEntryManagement/deliveryManagement.html'
		},{
			title: '进港分单',
			href: 'portEntryManagement/entryOrder.html'
		},{
			title: '出港配载查询',
			href: 'portEntryManagement/departureStowageQuery.html'
		},{
			title: '到达时间录入',
			href: 'portEntryManagement/arrivalTimeInput.html'
		}]

	},{
		title: '物流管理',
		icon: '&#xe62f;',
		children: [{
			title: '跟踪表登记',
			href: 'physicalDistributionManagement/traceTableRegister.html'
		},{
			title: '跟踪表查询',
			href: 'physicalDistributionManagement/traceTableQuery.html'
		},{
			title: '物流交接单查询',
			href: 'physicalDistributionManagement/logisticsQuery.html'
		},{
			title: '时间统计',
			href: 'physicalDistributionManagement/timeStatistics.html'
		},{
			title: '货量统计',
			href: 'physicalDistributionManagement/volumeStatistics.html'
		}]

	}]
}];
