import React from 'react'
import { shallow } from 'enzyme'
import ForumPost from './ForumPost.js'

const setUp = props =>{
  const component = shallow(<ForumPost {...props}/>);
  return component;
}
describe('ForumPost component', () => {

  let wrapper;
  let onClick = jest.fn()
  beforeEach(()=>{
    const props = {
      image: "../../assets/images/card_profile3.png",
      name: "Lexi R.",
      likes: 0,
      comments: 0,
      pillClick: onClick,
      commentClick: onClick,
      likeClick: onClick,
      to:"/"
    }
    wrapper = setUp(props);
    
  })
  it('Should render without errors', ()=>{
    let component = wrapper.find('.ForumPost')
    expect(component.length).toBe(1)
  })
  it('Should render two buttons', ()=>{
    let component = wrapper.find('Button');
    expect(component.length).toBe(2)
  })
  it('Should render post body', ()=>{
    let component = wrapper.find('PostBody');
    expect(component.length).toBe(1)
  })
  it('Should render profile picture', ()=>{
    let component = wrapper.find('ProfilePicture');
    expect(component.length).toBe(1)
  })
})
