import { useEffect, useState } from "react"
import { Input } from "../core/Input/input";

export const CashRegister: React.FC = () => {
  const [one, setOne] = useState<string | number>('');
  const [five, setFive] = useState<string | number>('');
  const [ten, setTen] = useState<string | number>('');
  const [oneHundred, setOneHundred] = useState<string | number>('');
  const [fiveHundred, setFiveHundred] = useState<string | number>('');
  const [oneThousand, setOneThousand] = useState<string | number>('');
  const [fiveThousand, setFiveThousand] = useState<string | number>('');
  const [tenThousand, setTenThousand] = useState<string | number>('');
  const [oneCalc, setOneCalc] = useState<number>(0);
  const [fiveCalc, setFiveCalc] = useState<number>(0);
  const [tenCalc, setTenCalc] = useState<number>(0);
  const [oneHundredCalc, setOneHundredCalc] = useState<number>(0);
  const [fiveHundredCalc, setFiveHundredCalc] = useState<number>(0);
  const [oneThousandCalc, setOneThousandCalc] = useState<number>(0);
  const [fiveThousandCalc, setFiveThousandCalc] = useState<number>(0);
  const [tenThousandCalc, setTenThousandCalc] = useState<number>(0);
  const [accCalc, setAccCalc] = useState<string | number>('');
  const [calc, setCalc] = useState<number>(0);
  const [miss, setMiss] = useState<number>(0);

  useEffect(() => {
    const moneylist = [oneCalc, fiveCalc, tenCalc, oneHundredCalc, fiveHundredCalc, oneThousandCalc, fiveThousandCalc, tenThousandCalc];
    const calcValue = moneylist.reduce((acc, cur) => {
      const accVal = !Number.isNaN(Number(acc)) ? acc as number : 0;
      const curVal = !Number.isNaN(Number(cur)) ? cur as number : 0;
      return accVal + curVal;
    });
    setCalc(calcValue);
  }, [fiveCalc, fiveHundredCalc, fiveThousandCalc, oneCalc, oneHundredCalc, oneThousandCalc, tenCalc, tenThousandCalc]);

  useEffect(() => {
    const val = accCalc ? Number(accCalc) - calc : 0;
    setMiss(val);
  }, [accCalc, calc]);

  const getActualVal = (val: string | number) => !Number.isNaN(Number(val)) ? val : '';
  return (
    <div>
      <h3 className="cr-title">レジ計算用ツール</h3>
      <div className="cr-contents-wrapper">
        <div className="cr-contents">
          <div className="cr-wrapper">
            <div>
              <Input
                label="1円の枚数"
                value={one}
                unit="枚"
                placeholder="1円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setOne(val);
                  setOneCalc(val ? Number(val) : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{oneCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-wrapper">
            <div>
              <Input
                label="5円の枚数"
                value={five}
                unit="枚"
                placeholder="5円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setFive(val);
                  setFiveCalc(val ? Number(val) * 5 : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{fiveCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-wrapper">
            <div>
              <Input
                label="10円の枚数"
                value={ten}
                unit="枚"
                placeholder="10円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setTen(val);
                  setTenCalc(val ? Number(val) * 10 : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{tenCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-wrapper">
            <div>
              <Input
                label="100円の枚数"
                value={oneHundred}
                unit="枚"
                placeholder="100円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setOneHundred(val);
                  setOneHundredCalc(val ? Number(val) * 100 : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{oneHundredCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-wrapper">
            <div>
              <Input
                label="500円の枚数"
                unit="枚"
                value={fiveHundred}
                placeholder="500円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setFiveHundred(val);
                  setFiveHundredCalc(val ? Number(val) * 500 : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{fiveHundredCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-wrapper">
            <div>
              <Input
                label="1000円の枚数"
                value={oneThousand}
                unit="枚"
                placeholder="1000円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setOneThousand(val);
                  setOneThousandCalc(val ? Number(val) * 1000 : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{oneThousandCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-wrapper">
            <div>
              <Input
                label="5000円の枚数"
                unit="枚"
                value={fiveThousand}
                placeholder="5000円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setFiveThousand(val);
                  setFiveThousandCalc(val ? Number(val) * 5000 : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{fiveThousandCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-wrapper">
            <div>
              <Input
                label="10000円の枚数"
                value={tenThousand}
                unit="枚"
                placeholder="10000円の枚数を入力"
                onChange={(e) => {
                  const val = getActualVal(e.target.value);
                  setTenThousand(val);
                  setTenThousandCalc(val ? Number(val) * 10000 : 0);
                }}
              />
            </div>
            <div className="cr-each-calc-wrapper">
              <div className="cr-each-calc-unit">計：</div>
              <div className="cr-each-calc">{tenThousandCalc}</div>
              <div className="cr-each-calc-unit">円</div>
            </div>
          </div>
          <div className="cr-each-calc-wrapper">
            <div className="cr-calc-title">合計：</div>
            <div className="cr-each-calc">{calc || 0}</div>
            <div className="cr-each-calc-unit">円</div>
          </div>
          <div className="cr-each-miss-wrapper">
            <div className="cr-calc-title">過不足：</div>
            <Input
              value={accCalc}
              placeholder="前回の金額を入力"
              onChange={(e) => {
                const val = getActualVal(e.target.value);
                setAccCalc(val);
              }}
            />
            <div className="cr-each-calc-unit">-</div>
            <div className="cr-each-calc">{calc || 0}</div>
            <div className="cr-each-calc-unit">=</div>
            <div className="cr-each-calc">{miss || 0}</div>
            <div className="cr-each-calc-unit">円</div>
          </div>
        </div>
      </div>
    </div>
  );
}
