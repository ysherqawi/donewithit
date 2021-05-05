import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import AppText from '../components/Text';
//import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import colors from '../config/colors';
import Card from '../components/Card';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      {/* <ActivityIndicator visible={loading} /> */}
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrive the listings.</AppText>
            <Button title='Retry' onPress={loadListings} />
          </>
        )}
        <ActivityIndicator animating={loading} size='large' />
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={'$' + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20, backgroundColor: colors.light },
});
export default ListingsScreen;
