import collect from './collect';

export const regexMatchAny = (predicates: object | []) => {
   const union = collect(predicates).join('|');

   return new RegExp(`(${union})`);
};