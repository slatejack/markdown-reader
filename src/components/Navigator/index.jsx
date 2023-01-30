import React from 'react';
import { Button } from 'antd';
import styles from './index.module.less';

const Navigater = ({directory = []}) => {

	const onClickTab = (top) => {
		window.scrollTo({
			top,
			behavior: 'smooth',
		});
	};
	return (
		<div className={styles.navigaterBody}>
			{
				directory.length 
					? directory.map(node => {
						if (node.type === 'H1') {
							return (
								<Button key={`${node.top}`} type='link' onClick={() => onClickTab(node.top)}>{ node.text }</Button>
							);
						} else if (node.type === 'H2') {
							return (
								<div key={`${node.top}`} className={styles.secondTitle} onClick={() => onClickTab(node.top)}>{ node.text }</div>
							);
						} else {
							return <></>;
						}
					})
					: null
			}
		</div>
	);
};

export default Navigater;
