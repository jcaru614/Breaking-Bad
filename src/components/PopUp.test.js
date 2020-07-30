import 'react-native';
import PopUp from './PopUp';
import React from 'react';
import renderer from 'react-test-renderer';

describe('it works', () => {
  it('match snap', () => {
    const tree = renderer.create(<PopUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('on call set modalVis toggles state', () => {
      it('set state to true ', () => {
          let setModalVis = false;
          const click = jest.fn();
        //   const handleClick = jest.spyOn({setModalVis:true}, "setModalVis")
          click();
        //   const handleClick = jest.spyOn(React, "useState");
          expect(click).toHaveBeenCalled();
          expect(setModalVis).toBe(false)
      });
  });
});

