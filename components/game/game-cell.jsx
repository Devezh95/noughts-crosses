
import {GameSymbol} from './game-symbol'
import { clsx } from 'clsx';

export function GameCell({ isWinner, onClick, symbol }) {
    return (
      <button className={clsx(
        'border border-gray-400 -ml-px -mt-px flex align-middle justify-center bg-transparent',
         isWinner &&  "bg-red-400"
         )}
       onClick={onClick}>
        {symbol ? <GameSymbol symbol={symbol} /> : null}
      </button>
    );
  }