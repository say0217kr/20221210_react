import { useRecoilValue } from "recoil";
import { doneCountState, unDoneCountState } from "../state/todos";

function TodoHeader() {
    const unDoneCnt = useRecoilValue(unDoneCountState);
    const doneCnt = useRecoilValue(doneCountState);

    const date = new Date();

    return (
        <div>
            <p>2023년 01월 14일</p>
            <p>
                할일 : {unDoneCnt} / {doneCnt}
            </p>
        </div>
    );
}

export default TodoHeader;
