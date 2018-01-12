import React, {Component} from 'react';

export default class Component1 extends Component {




render (){ //SIM-3 38D
    return (
        <div>
            <input onChange={(e) => this.props.handleChange(e.target.value)} />{/*SIM-3 36J and 37D*/}
            <div className='floating'>{this.props.sentence}</div>{/*SIM-3 36G and 38C*/}
        </div>
    )
}
}
