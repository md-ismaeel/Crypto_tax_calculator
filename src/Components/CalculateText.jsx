import React, { useState } from 'react';
import { HeaderFile } from './HeaderFile';
import { taxRates } from './TaxRates';
import { LevelOption } from './LevelOption';
import { FormGroups } from './FormGroups';
import { PiLessThanBold } from "react-icons/pi";
import { PiGreaterThanBold } from "react-icons/pi";
import { FormGroupReadOnly } from './FormGroupReadOnly';
import { FaCheck } from "react-icons/fa6";
import "../Components/CalculateText.css"


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
        <main className="w-full mb-10">

            <section className="container w-[100%] flex flex-col justify-center items-center gap-6 bg-white mt-4 rounded-md">

                <HeaderFile />
                {/* first para */}
                <div className='first-para w-[80%] flex justify-between items-center mt-4'>

                    <div>
                        <LevelOption title={'Financial Year'} options={['FY-2023-2024']} />
                    </div>

                    <div className=''>
                        <LevelOption title={'Country code'} options={['Australia']} />
                    </div>

                </div>
                <p className='w-[80%] border-b-2'></p>


                {/* second para */}
                <div className="w-[80%] flex justify-center items-center flex-col">

                    <div className='second-para w-[100%] flex gap-4 justify-between items-center'>

                        <div className="form-group">
                            <FormGroups title={'Enter purchase price of Crypto'} setInputVal={(e) => setPurchasePrice((Number(e)) || 0)} />

                        </div>
                        <div className="form-group">
                            <FormGroups title={'Enter sale price of Crypto'} setInputVal={(e) => setSalePrice((Number(e)) || 0)} />
                        </div>

                    </div>

                    <div className='third-para w-[100%] flex gap-4 justify-between items-center'>

                        <div className="form-group">
                            <FormGroups title={'Enter Your Expenses'} setInputVal={(e) => setExpenses((Number(e)) || 0)} />
                        </div>

                        <div className="form-group flex flex-col">
                            <label className='w-full mb-2'>Investment Type</label>

                            <div className='w-full flex justify-between items-center'>

                                <div className='flex flex-col'>

                                    <div onClick={() => setInvestmentType('Short Term')} className={`${investmentType === "Short Term" ? "border-blue-300 text-blue-500" : ''}  h-[40px] w-[150px] flex justify-center items-center border-2 rounded-md cursor-pointer`}><span>Short Term</span><span className='text-xl font-bold ml-1'>{investmentType === "Short Term" ? <FaCheck /> : ''}</span></div>

                                    <div className='flex justify-start items-center'><PiLessThanBold className='flex text-sm' /><span>12 months</span></div>

                                </div>

                                <div className='flex flex-col'>

                                    <div onClick={() => setInvestmentType('Long Term')} className={`${investmentType === "Long Term" ? "border-blue-300 text-blue-500" : ''}  h-[40px] w-[150px] flex justify-center items-center border-2 rounded-md cursor-pointer`}><span>Long Term</span><span className='text-xl font-bold ml-1'>{investmentType === "Long Term" ? <FaCheck /> : ''}</span></div>

                                    <div className='flex justify-center items-center'><PiGreaterThanBold className='text-sm' /><span>12 months</span></div>

                                </div>



                            </div>

                        </div>

                    </div>

                    <div className="form-group w-[100%] flex justify-between items-center mt-6">

                        <div className='flex flex-col justify-center items-start '>
                            <label>Annual Income</label>
                            <select value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)}
                                className='w-[300px] px-4 py-2 bg-slate-100 rounded-md'
                            >
                                {taxRates.map((rate) => (
                                    <option key={rate.range} value={rate.range}>{rate.range}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex justify-center items-center'>
                            <button onClick={calculateTax} className='w-[300px] border py-2 mt-6 flex justify-center items-center bg-blue-600 rounded-md text-white font-semibold active:bg-blue-400'>Calculate</button>
                        </div>

                    </div>

                </div>

                {/* third para */}
                <div className="w-[80%] results mt-8">

                    {investmentType === 'Long Term' && (

                        <div className='long-term w-full flex justify-between items-center'>
                            <FormGroupReadOnly title={"Capital Gains Amount"} val={capitalGains} />
                            <FormGroupReadOnly title={"Discount for Long Term Gains"} val={capitalGains * 0.5} />
                        </div>
                    )}
                    {investmentType === 'Short Term' && (
                        <div className='short-term w-full flex justify-between items-center gap-2'>
                            <FormGroupReadOnly title={"Capital Gains Amount"} val={Number(capitalGains)} />
                            <FormGroupReadOnly title={"Discount for Long Term Gains"} val={Number(0)} />
                        </div>

                    )}


                    <div className='resultant w-full flex justify-between items-center mb-10'>

                        <div className='w-[300px] h-[100px] px-2 py-2 rounded-md flex flex-col justify-center items-center bg-green-50'>
                            <label>Net Capital Gains</label>
                            <p className='w-[70%] mt-2 flex justify-center items-center text-xl text-green-600'>{`$${netCapitalGains}`}</p>
                        </div>
                        <div className='w-[300px] h-[100px] px-2 py-2 rounded-md flex flex-col justify-center items-center bg-blue-50'>
                            <label>Tax you need to pay</label>
                            <p className='w-[70%] mt-2 flex justify-center items-center text-2xl text-blue-600'>{`$${tax.toFixed(1)}`}</p>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}



