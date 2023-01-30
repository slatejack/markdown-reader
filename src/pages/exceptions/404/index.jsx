import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';
const NotFoundPage = () => {
	const history = useNavigate();
	return (
		<Result
			status="404"
			title="找不到页面"
			subTitle="页面地址错误，请检查后重试"
			extra={
				<Button type="primary" onClick={() => history('/home/reader')}>
          返回首页
				</Button>
			}
		/>
	);
};

export default NotFoundPage;
