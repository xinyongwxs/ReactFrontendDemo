import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatchers/AppDispatcher';
import bankConstants from '../constants/constant';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let balance = 0;

let BankBalanceStore = {
	getState() {
		return balance;
	},
	addListener(callBack) {
		return __emitter.addListener(CHANGE_EVENT, callBack);
	}
};

BankBalanceStore.dispatchToken = AppDispatcher.register((action) => {
	switch(action.type) {
		case bankConstants.CREATED_ACCOUNT:
			balance = 0;
			__emitter.emit(CHANGE_EVENT);
			break;
		case bankConstants.DEPOSITED_INTO_ACCOUNT:
			balance = balance + action.ammount;
			__emitter.emit(CHANGE_EVENT);
			break;
	}
});

export default BankBalanceStore;