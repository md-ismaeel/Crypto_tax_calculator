import React, { useState } from 'react';
import { HeaderFile } from './HeaderFile';
import { taxRates } from './TaxRates';
import { LevelOption } from './LevelOption';
import { FormGroups } from './FormGroups';
import { PiLessThanBold } from "react-icons/pi";
import { PiGreaterThanBold } from "react-icons/pi";
import { FormGroupReadOnly } from './FormGroupReadOnly';


export const CalculateText = () => {
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [salePrice, setSalePrice] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [investmentType, setInvestmentType] = useState('Short Term');
    const [annualIncome, setAnnualIncome] = useState(Number(taxRates[0].range));
    const [capitalGains, setCapitalGains] = useState(0);
    const [netCapitalGains, setNetCapitalGains] = useState(0);
    const [tax, setTax] = useState(0);

    const calculateTax = () => {
        const capitalGainsAmount = salePrice - purchasePrice - expenses;
        let discount = 0;
        if (investmentType === 'Long Term' && capitalGainsAmount > 0) {
            discount = capitalGainsAmount * 0.5;
        }
        const netCapitalGainsAmount = capitalGainsAmount - discount;
        setCapitalGains(capitalGainsAmount);
        setNetCapitalGains(netCapitalGainsAmount);

        const selectedTaxRate = taxRates.find(rate => rate.range === annualIncome);
        const taxAmount = selectedTaxRate.base + (selectedTaxRate.rate * netCapitalGainsAmount);
        setTax(taxAmount);
    };

    return (
        <main className="container w-full mb-10">

            <section className="w-full flex flex-col justify-center items-center gap-6 bg-white mt-4 rounded-md">

                <HeaderFile />
                {/* first para */}
                <div className='w-[80%] flex justify-between items-center mt-4'>

                    <div>
                        <LevelOption title={'Financial Year'} options={['FY-2023-2024']} />
                    </div>

                    <div className=''>
                        <LevelOption title={'Country code'} options={['Australia']} />
                    </div>

                </div>
                <p className='w-[80%] border-b-2'></p>


                {/* second para */}
                <div className="form w-[80%] flex justify-center items-center flex-col">

                    <div className='w-[100%] flex gap-4 justify-between items-center'>

                        <div className="form-group">
                            <FormGroups title={'Enter purchase price of Crypto'} setInputVal={(e) => setPurchasePrice((Number(e)) || 0)} />

                        </div>
                        <div className="form-group">
                            <FormGroups title={'Enter sale price of Crypto'} setInputVal={(e) => setSalePrice((Number(e)) || 0)} />
                        </div>

                    </div>

                    <div className='w-[100%] flex gap-4 justify-between items-center'>

                        <div className="form-group">
                            <FormGroups title={'Enter Your Expenses'} setInputVal={(e) => setExpenses((Number(e)) || 0)} />
                        </div>

                        <div className="form-group w-[45%] flex flex-col">
                            <label className='w-full mb-2'>Investment Type</label>

                            <div className='w-full flex justify-between items-center'>

                                <div className='flex flex-col'>
                                    <div onClick={() => setInvestmentType('Long Term')} className='h-[40px] w-[150px] flex justify-center items-center border-2 rounded-md  cursor-pointer'>Short Term
                                    </div>
                                    <div className='flex justify-start items-center'><PiLessThanBold className='flex text-sm' /><span>12 months</span></div>

                                </div>
                                <div className='flex flex-col'>

                                    <div onClick={() => setInvestmentType('Short Term')} className='h-[40px] w-[150px] flex justify-center items-center border-2 rounded-md cursor-pointer'>Long Term</div>
                                    <div className='flex justify-center items-center'><PiGreaterThanBold className='text-sm' /><span>12 months</span></div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="form-group w-[100%] flex justify-between items-center mt-4">

                        <div className='w-full flex flex-col justify-center '>
                            <label>Annual Income</label>
                            <select value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)}
                                className='w-[300px] px-4 py-2 bg-slate-100 rounded-md'
                            >
                                {taxRates.map((rate) => (
                                    <option key={rate.range} value={rate.range}>{rate.range}</option>
                                ))}
                            </select>
                        </div>

                        <div className='w-[100%] flex justify-center items-center'>
                            <button onClick={calculateTax} className='w-[300px] border py-2 mt-6 ml-4 flex justify-center items-center'>Calculate</button>
                        </div>

                    </div>

                </div>

                {/* third para */}
                <div className="results">

                    {investmentType === 'Long Term' && (

                        <div className='w-full flex justify-between items-center gap-20'>
                            <FormGroupReadOnly title={"Capital Gains Amount"} val={capitalGains} />
                            <FormGroupReadOnly title={"Discount for Long Term Gains"} val={capitalGains * 0.5} />
                        </div>
                    )}
                    {investmentType === 'Short Term' && (

                        <div className='w-full flex justify-between items-center gap-20'>
                            <FormGroupReadOnly title={"Capital Gains Amount"} val={capitalGains} />
                            <FormGroupReadOnly title={"Discount for Long Term Gains"} val={capitalGains * 0.5} />
                        </div>

                    )}
                    <div className='w-full flex justify-between items-center mb-10'>

                        <div className='w-[300px] h-[100px] px-2 py-2 rounded-md flex flex-col justify-center items-center bg-green-50'>
                            <label>Net Capital Gains</label>
                            <p className='w-[70%] mt-2 flex justify-center items-center text-xl text-green-600'>{`$${netCapitalGains}`}</p>
                        </div>
                        <div className='w-[300px] h-[100px] px-2 py-2 rounded-md flex flex-col justify-center items-center bg-blue-50'>
                            <label>Tax you need to pay</label>
                            <p className='w-[70%] mt-2 flex justify-center items-center text-2xl text-blue-600'>{`$${tax}`}</p>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}
