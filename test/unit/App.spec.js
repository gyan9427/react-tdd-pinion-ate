import 'jsdom-global/register';
import React from 'react';
import {shallow} from 'enzyme';

import  App from '../../src/App';

describe('App',()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<App/>)
    })
    it('renders hello world',()=>{
        
        expect(wrapper.find('.hello').text()).toContain('Hello');
    })
})