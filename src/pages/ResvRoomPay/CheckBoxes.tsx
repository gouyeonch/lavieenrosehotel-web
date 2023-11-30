import { useCallback, useState } from 'react';

const checkBoxList = ['전체동의', '시설이용규칙 및 취소/환불규정 동의(필수)', '개인정보 수집 및 이용동의(필수)', '개인정보 제3자 제공동의(필수)', '만 14세 이상 확인(필수)'];

const CheckBoxes = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);

    console.log(value, e.target.checked);
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('checkedList:', checkedList);
    },
    [checkedList]
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='checkbox-group'>
          {checkBoxList.map((item, idx) => (
            <div className='checkbox' key={idx}>
              <input
                type='checkbox'
                id={item}
                checked={checkedList.includes(item)}
                onChange={(e) => checkHandler(e, item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>

      </form>
    </div>
  );
};

export default CheckBoxes;
