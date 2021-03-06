import { createAction, createAction0, createActions0, createActions } from '../src/actionCreators';
import expect from 'expect.js';

describe('actionCreators', () => {
  describe('createAction', () => {
    it('should create an action', () => {
      const action = createAction('test')
      const result = action('payload')
      expect(result).to.eql({
        type: 'test',
        payload: 'payload'
      })
    })

    it('should create an action using specified payload transform', () => {
      const action = createAction('test', x => 44)
      const result = action('payload')
      expect(result).to.eql({
        type: 'test',
        payload: 44
      })
    })

    it('should carry error when specified', () => {
      const action = createAction('test')
      const result = action(null, 'error')
      expect(result).to.eql({
        type: 'test',
        error: 'error'
      })
    })
  })

  describe('createActions', () => {
    it('should create multiple actions', () => {
      const [act1, act2] = createActions('test1', 'test2')
      expect(act1()).to.eql({
        type: 'test1'
      })
      expect(act2('foo')).to.eql({
        type: 'test2',
        payload: 'foo'
      })
    })
  })

  describe('createAction0', () => {
    it('should create action without payload', () => {
      const action = createAction0('test')
      const result = action('payload')
      expect(result).to.eql({
        type: 'test'
      })
    })
  })

  describe('createActions0', () => {
    it('should create actions without payload', () => {
      const [act1, act2] = createActions0('test1', 'test2')
      expect(act1()).to.eql({
        type: 'test1'
      })
      expect(act2('foo')).to.eql({
        type: 'test2'
      })
    })
  })
});
