import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgresBar(props) {
    const [val, setVal] = useState(0.0);
    const checkPathColor = (val) => {
        if (val >= 3) {
            return "#5DAD63"
        } else if (val >= 2 && val < 3) {
            return "#FCD467"
        } else {
            return "#F05656"
        }
    }

    setTimeout(() => {
        setVal(props.value)
    }, 400);
    return (
        <>
            <div className="relative">
                <div style={{ width: props.width, height: props.height, transform: 'rotate(-99deg)' }}>
                    <CircularProgressbar value={val} maxValue={4}
                        circleRatio={0.55}
                        styles={buildStyles({
                            pathColor: checkPathColor(props.value),
                            pathTransitionDuration: 2,
                            pathTransition: ''

                        })}
                        strokeWidth={12}
                    />
                </div>
                <div className="text-center absolute m-auto left-0 right-0 md:top-12 top-14 bottom-0">
                    <div className={`text-[38px] text-[#355670] font-bold`}>{props.value}</div>
                    <div className={`text-base font-semibold md:block hidden`}>Indeks Prestasi</div>
                </div>
            </div>
        </>
    )
}
