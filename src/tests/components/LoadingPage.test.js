import React from 'react' ;
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('Should correct render the loading page', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})