import { StyleSheet, Text, TextComponent, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState('');
  console.log(results);

  const filterResultsByPrice = (price)=>{
    return results.filter((results)=>{
      return results.price === price
    });
  }
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}

      />

      {
        !errorMessage ?  (
          <>
            {
            !results.length == 0 ?  (
            <>
              <ResultsList title='Ucuz Restoranlar' results={filterResultsByPrice('₺')}/>
              <ResultsList title='Uygun Restoranlar' results={filterResultsByPrice('₺₺')}/>
              <ResultsList title='Pahalı Restoranlar' results={filterResultsByPrice('₺₺₺')}/>
            </>) : (<></>)
            }
          </>
        ): <Text>{errorMessage}</Text>
      }

      
      
    </View>
  )
}

const styles = StyleSheet.create({})