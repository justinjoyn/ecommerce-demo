import React, {useCallback, useMemo} from 'react';
import {
  Avatar,
  DrawerGroup,
  DrawerItem,
  Layout,
  Spinner,
  Text,
} from '@ui-kitten/components';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import {menu} from '../queries/menu';

type Props = DrawerContentComponentProps;

export default function DrawerContent(props: Props) {
  const {data, isLoading} = menu.useList();

  const onNavigate = useCallback(() => {
    props.navigation.navigate('Home');
  }, [props.navigation]);

  const Menu = useMemo(() => {
    if (isLoading) {
      return <Spinner />;
    } else if (data) {
      return data.map(item => {
        return (
          <Layout style={styles.container} key={item.name}>
            <Layout style={styles.row} level={'2'}>
              <Avatar source={{uri: item.img}} size={'large'} />
              <Text category="h6">{item.name}</Text>
            </Layout>
            {item.children.map(children => {
              return (
                <Layout key={children.name}>
                  <DrawerGroup title={children.name}>
                    {children.categories.map(category => {
                      return (
                        <DrawerItem
                          title={category}
                          key={category}
                          onPress={onNavigate}
                        />
                      );
                    })}
                  </DrawerGroup>
                </Layout>
              );
            })}
          </Layout>
        );
      });
    } else {
      return null;
    }
  }, [data, isLoading, onNavigate]);

  return <DrawerContentScrollView {...props}>{Menu}</DrawerContentScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
