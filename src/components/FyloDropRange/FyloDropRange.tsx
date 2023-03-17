import { useState } from 'react';
import Dialog from "../Dialog/Dialog";

import styles from './assets/css/FyloDropRange.module.css';

function FyloDropRange() {
	const [memory, setMemory] = useState(0);

	return (
		<div className={styles["fylo-droprange-container"]}>
			<p className={styles['fylo-using-memory']}>
				You've used <b>{memory} GB</b> of your storage
			</p>
			<div className={`${styles['dialog-container']}`}>
				<Dialog gbLeft={1000 - memory}/>
			</div>
			<div className={styles['memory-range']}>
				<input type="range" min={0} max={1000} value={memory} onChange={(e) => setMemory(parseInt(e.target.value))} />
			</div>
			<div className={styles['range-points']}>
				<p>0 GB</p>
				<p>1000 GB</p>
			</div>
		</div>
	);
}

export default FyloDropRange;
