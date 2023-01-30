import { Image, Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router';
import LOGO from '@/assets/logo.svg';
import styles from './index.module.less';
const BasicLayout = () => {
	const { Header, Content, Footer } = Layout;
	return (
		<Layout className={styles.layout}>
			<Header className={styles.header}>
				<Image width={32} height={32} src={LOGO} preview={false} />
				<div className={styles.title}>Markdown阅读器</div>
			</Header>
			<Content style={{ padding: '20px 50px' }}>
				<div className={styles.pageContainer}>
					<Outlet />
				</div>
			</Content>
			<Footer className={styles.footer}>@Copyright by SlateXu</Footer>
		</Layout>
	);
};

export default BasicLayout;
