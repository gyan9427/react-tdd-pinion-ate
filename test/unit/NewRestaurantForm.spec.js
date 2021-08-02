import React from 'react';
import { shallow } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm'


describe('NewRestaurantForm',()=>{
    describe('clicking the save button', ()=>{
        it('calls the onSave handler',()=>{
            const saveHandler = jest.fn();
            const wrapper = shallow(<NewRestaurantForm onSave={saveHandler}/>);

            const newRestaturnat = wrapper
                .find('[data-test="newRestaurantName"]')
                .simulate('change',{target: {value: 'Sushi Place'}})

            wrapper
                .find('[data-test="saveNewRestaurantbutton"]')
                .simulate('click');
            
            expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
        })
    })
})