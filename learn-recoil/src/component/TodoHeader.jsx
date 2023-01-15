import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";
import { doneCountState, unDoneCountState } from "../state/todos";
import {
    getDoneCount,
    getPercentage,
    getUnDoneCount,
    getUndoneCount2,
} from "../state/todos_redux";

function TodoHeader() {
    const date = new Date();

    // const doneCnt = useRecoilValue(doneCountState);
    // const unDoneCnt = useRecoilValue(unDoneCountState);

    const doneCnt = useSelector(getDoneCount);
    // const unDoneCnt = useSelector(getUnDoneCount);
    const unDoneCnt = useSelector(getUndoneCount2);

    const percentage = useSelector(getPercentage);
    return (
        <div>
            <p>2023년 01월 14일</p>
            <p>
                할일 : {unDoneCnt} / {doneCnt} ({percentage})
            </p>
        </div>
    );
}

export default TodoHeader;
