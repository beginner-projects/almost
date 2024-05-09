'use client'

import './index.css'
import Image from 'next/image'
import { useMetaMask } from '@/context/useMetaMask'


export default function SwapCard() {

    const { wallet, connectMetaMask } = useMetaMask()

    return (
        <div className='swapWrapper'>
            <div className="divInsideSwapWrapper divInsideSwapWrapper2">
                <main className="fbGwtx">
                    <div className="bkiIsG">
                        <div className="dKubqp cPCYrp bIFEzi fjIrrY"></div>
                        <div>
                            <div className=" fKwfyP">
                                <div className=" fBZtXQ">
                                    <div className=" fEGIOV"><span data-disable-theme="true" className="font_body _fontFamily-299667014 _display-inline _boxSizing-border-box _wordWrap-break-word _whiteSpace-pre-wrap _mt-0px _mr-0px _mb-0px _ml-0px _color-843135005 _fontSize-14px _lineHeight-20px _fontWeight-400 _userSelect-none">You pay</span>
                                        <div className=" eDFLAS">
                                            <div id="style-Y3Pre" className="style-Y3Pre">
                                                <input className=" bSkNre jvoGun" type="number" placeholder="00" />
                                            </div>
                                            <div>
                                                <div className="hgzrpu">
                                                    <button className="bbWEFp jVtbiJ kwyzSH gJLcAE"><span className="ithpwO">
                                                        <div className="dKubqp cPCYrp haLsDq">
                                                            <div className="hfSgdu style-mifhj" id="style-mifhj">
                                                                <div className=" ikhZjv">
                                                                    <div className=" efSqJh">
                                                                        <Image src="/bnb.svg" alt="token-logo" width={24} height={24} />
                                                                    </div>
                                                                </div>
                                                            </div><span className=" kyuoPa ">BNB</span>
                                                        </div>
                                                    </span>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="  iLrmxP iwDrPg">
                                            <div className="  dKubqp cPCYrp bIFEzi">
                                                <div className=" fSifYV"></div><span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" dwsYYt">
                                <div color="#222222" className="gsVPlC">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg></div>
                            </div>
                        </div>
                        <div className=" fKwfyP">
                            <div className=" fBZtXQ">
                                <div className=" fEGIOV">
                                    <span data-disable-theme="true" className="font_body _fontFamily-299667014 _display-inline _boxSizing-border-box _wordWrap-break-word _whiteSpace-pre-wrap _mt-0px _mr-0px _mb-0px _ml-0px _color-843135005 _fontSize-14px _lineHeight-20px _fontWeight-400 _userSelect-none">You pay</span>
                                    <div className=" eDFLAS">
                                        <div id="style-Y3Pre" className="style-Y3Pre">
                                            <input className="bSkNre jvoGun" type="text" placeholder="00" />
                                        </div>
                                        <div>
                                            <div className=" hgzrpu"><button className="bbWEFp jVtbiJ kwyzSH gJLcAE"><span className="ithpwO">
                                                <div className="dKubqp cPCYrp haLsDq">
                                                    <div className="hfSgdu style-mifhj" id="style-mifhj">
                                                        <div className=" ikhZjv">
                                                            <div className=" efSqJh">
                                                                <Image src="/flashblack.svg" alt="token-logo" width={30} height={30} />
                                                            </div>
                                                        </div>
                                                    </div><span className=" kyuoPa ">SPD</span>
                                                </div>
                                            </span>
                                            </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="iLrmxP iwDrPg">
                                        <div className="dKubqp cPCYrp bIFEzi">
                                            <div className="fSifYV"></div><span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {!wallet.accounts.length && (
                                <button onClick={connectMetaMask} font-weight="535" className="hCFFB jVtbiJ bVSwXO">
                                    Connect Wallet
                                </button>
                            )}
                            {wallet.accounts.length > 0 && (
                                <button font-weight="535" className="hCFFB jVtbiJ bVSwXO">
                                    Swap
                                </button>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}