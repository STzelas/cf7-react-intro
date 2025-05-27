/**
 * Τα hooks τα ονόματα τα ξεκινάμε με
 * Use...
 * Μόνο κώδικας ts που περιλαμβάνει
 * λειτουργίες, όχι ui
 */
import {useState} from "react";

export const useCounter = (initialValue: number = 0) => {
   const [count, setCount] = useState(initialValue);

   const increase = () => {
     setCount(count + 1);
   }

   const decrease = () => {
     if (count > 0) setCount(count - 1);
   }

   const reset = () => {
     if (count > 0) setCount(initialValue);
   }

   // return τις μεταβλητές και functions
   return {
     count,
     increase,
     decrease,
     reset,
   };
}



