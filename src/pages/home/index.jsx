import { Input } from 'antd';
import React, { useDeferredValue, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Navigator from '@/components/Navigator';
import styles from './index.module.less';
const Home = () => {
	const [markdownText, setMarkdownText] = useState('');
	const [directory, setDirectory] = useState([]);
	const lazyText = useDeferredValue(markdownText);

	useEffect(() => {
		formatNodeInfo(document.querySelectorAll('div.markdown-body > *'));
	}, [lazyText]);

	const formatNodeInfo = (nodeArray = []) => {
		if (nodeArray.length) {
			const formatNodeArray = [...nodeArray].map(node => {
				const { offsetTop, nodeName, innerText } = node;
				return {
					top: offsetTop,
					type: nodeName,
					text: innerText,
				};
			});
			setDirectory(formatNodeArray);
		}
	};

	const handleInputChange = (e) => {
		setMarkdownText(e.target.value);
	};
	return (
		<>
			<Input.TextArea onChange={handleInputChange} />
			<div className={ styles.markdownCover}>
				<div>
					<ReactMarkdown className='markdown-body'>
						{ lazyText }
					</ReactMarkdown>
				</div>
				<div className='sidebar'>
					<Navigator directory={ directory } />
				</div>
			</div>
		</>
	);
};

export default Home;