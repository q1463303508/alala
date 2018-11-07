import React, { Component } from 'react';

class Datamodal extends Component {
    render() {
        let {obj} = this.props
        return (
            <div>
                {
                    obj.map((v,i) => {
                        return <div key={i} className="eachmodal">
                                <div className="modalheader">
                                    <div className="line"></div>
                                    <span className="title">{v.title}</span>
                                    {
                                        v.rightType ? <div className="headerright">
                                        <span>本月</span>
                                        <span>上月</span>
                                    </div> : <div className="headerright">
                                        <select name="" id="">
                                        <option value="">今日</option>
                                        <option value="">一天前</option>
                                        <option value="">两天前</option>
                                        <option value="">三天前</option>
                                        <option value="">四天前</option>
                                        <option value="">五天前</option>
                                        </select>
                                    </div>
                                    }
                                </div>
                                <div className="modalmain">
                                    <div className="left">
                                        <div className="yuan">
                                            <span>出勤率</span>
                                            <span>0%</span>
                                            <div className="point"></div>
                                        </div>
                                        
                                    </div>
                                    <div className="right">
                                        <span>出勤：0次</span>
                                        <span>请假：0次</span>
                                        <span>出差：0次</span>
                                        <span>迟到：0次</span>
                                        <span>外出：0小时</span>
                                        <span>加班：0小时</span>
                                    </div>
                                </div>
                        </div>
                    })
                }
                
            </div>
        );
    }
}

export default Datamodal;