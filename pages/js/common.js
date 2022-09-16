/**  JS公用类  **/

/**
 * 信息提示框
 * @param eleName
 * 			元素ID
 * @param info
 *            弹出的信息。例如：用户名不能为空
 */
function message(eleName,info) {
	layer.confirm(info, {
		btn : [ '确定' ] // 按扭，可在[]内以逗号分隔开后依次添加多个按扭
	}, function(index){
		$('#'+eleName).focus();
		layer.close(index);
	});
}

/**
 * 关闭窗口
 */
function closeCurrentLayer() {
	var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
	parent.layer.close(index);
}

/**
 * "撤回"询问框
 */
function btnCancel() {
	layer.confirm('确认撤回吗？', {
		btn: ['确认', '取消'] //可以无限个按钮，以逗号分隔开
	}, function(index){
		//确认按扭回调函数， 平均分到写点击“确认”按扭后需要做的事情
		window.history.back();
	});
}

/**
 * "发送"询问框
 */
function btnSend() {
	layer.confirm('确认发送吗？', {
		btn: ['确认', '取消'] //可以无限个按钮，以逗号分隔开
	}, function(index){
		//确认按扭回调函数， 平均分到写点击“确认”按扭后需要做的事情

	});
}

/**
 * "删除"询问框
 */
function btnDelete() {
	layer.confirm('确认删除吗？', {
		btn: ['删除', '取消'] //可以无限个按钮，以逗号分隔开
	}, function(index){
		//确认按扭回调函数， 平均分到写点击“确认”按扭后需要做的事情

	});
}



