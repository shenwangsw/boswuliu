var SystemMenu = [{
	title: '系统管理',
	icon: '&#xe63f;',
	isCurrent: true,
	menu: [{
		title: '基础数据',
		icon: '&#xe620;',
		isCurrent: true,
		children: [{
			title: '首页',
			href: 'workbench.html'
		}/**,{
			title: '二级页面',
			href: 'index.html'
		},{
			title: '招标流程',
			href: 'process.html'
		},{
			title: '供应商列表',
			href: 'providers.html'
		},{
			title: '详细信息',
			href: 'providers1.html'
		},{
			title: '企业基本信息',
			href: 'basic_info.html'
		}**/,{
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
		title: '受理',
		icon: '&#xe62f;',
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
	},{
		title: '分拣管理',
		icon: '&#xe62f;',
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

	},{
		title: '系统管理',
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
	title: '主数据',
	icon: '&#xe61e;',
	menu: [{
		title: '数据信息',
		icon: '&#xe647;',
		isCurrent: true,
		children: [{
			title: '数据管理',
			href: 'process.html',
			isCurrent: true
		},{
			title: '企业荣誉',
			href: 'index.html'
		},{
			title: '组织架构',
			href: 'index.html'
		},{
			title: '自定义',
			href: 'index.html'
		}]
	},{
		title: '数据表',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '供应商管理',
	icon: '&#xe620;',
	menu: [{
		title: '供应商列表',
		icon: '&#xe647;',
		children: [{
			title: '供应链条',
			href: 'providers.html',
			isCurrent: true
		},{
			title: '供应组织',
			href: 'index.html'
		},{
			title: '运输渠道',
			href: 'index.html'
		},{
			title: '自定义',
			href: 'index.html'
		}]
	},{
		title: '供应客户',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '采购商开发',
	icon: '&#xe625;',
	menu: [{
		title: '采购商主页',
		icon: '&#xe647;',
		children: [{
			title: '采购管理',
			href: 'providers1.html',
			isCurrent: true
		},{
			title: '采购列表',
			href: 'index.html'
		}]
	},{
		title: '数据表',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '采购寻源',
	icon: '&#xe64b;',
	menu: [{
		title: '寻源管理',
		icon: '&#xe647;',
		isCurrent: true,
		children: [{
			title: '自定义',
			href: 'basic_info.html',
			isCurrent: true
		},{
			title: '采购分析',
			href: 'index.html'
		}]
	},{
		title: '统计图',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '合同管理',
	icon: '&#xe64c;',
	menu: [{
		title: '合同归档',
		icon: '&#xe647;',
		isCurrent: true,
		children: [{
			title: '合同发布',
			href: 'basic_info.html',
			isCurrent: true
		},{
			title: '合同制度管理',
			href: 'index.html'
		}]
	},{
		title: '合同信息',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '自定义',
	icon: '&#xe646;',
	menu: [{
		title: '合同归档',
		icon: '&#xe647;',
		isCurrent: true,
		children: [{
			title: '合同发布',
			href: 'index.html',
			isCurrent: true
		},{
			title: '合同制度管理',
			href: 'index.html'
		}]
	},{
		title: '合同信息',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '自定义',
	icon: '&#xe646;',
	menu: [{
		title: '合同归档',
		icon: '&#xe647;',
		isCurrent: true,
		children: [{
			title: '合同发布',
			href: 'workbench.html',
			isCurrent: true
		},{
			title: '合同制度管理',
			href: 'index.html'
		}]
	},{
		title: '合同信息',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
},{
	title: '自定义',
	icon: '&#xe646;',
	menu: [{
		title: '合同归档',
		icon: '&#xe647;',
		isCurrent: true,
		children: [{
			title: '合同发布',
			href: 'basic_info.html',
			isCurrent: true
		},{
			title: '合同制度管理',
			href: 'index.html'
		}]
	},{
		title: '合同信息',
		icon: '&#xe611;',
		href: 'basic_info.html',
		children: []
	}]
}];
