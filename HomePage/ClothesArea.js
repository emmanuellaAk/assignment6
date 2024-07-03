import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const products = [
  {id: '1', image: require('../assets/dress1.png'), name: 'Office Wear', description: 'reversible angora cardigan', price: '$120'},
  {id: '2', image: require('../assets/dress2.png'), name: 'Black', description: 'reversible angora cardigan', price: '$120'},
  {id: '3', image: require('../assets/dress3.png'), name: 'Church Wear', description: 'reversible angora cardigan', price: '$120'},
  {id: '4', image: require('../assets/dress4.png'), name: 'Lamerei', description: 'reversible angora cardigan', price: '$120'},
  {id: '5', image: require('../assets/dress5.png'), name: '21WN', description: 'reversible angora cardigan', price: '$120'},
  {id: '6', image: require('../assets/dress6.png'), name: 'Lopo', description: 'reversible angora cardigan', price: '$120'},
  {id: '7', image: require('../assets/dress7.png'), name: '21WN', description: 'reversible angora cardigan', price: '$120'},
  {id: '8', image: require('../assets/dress3.png'), name: 'lame', description: 'reversible angora cardigan', price: '$120'},
];

function ProductCard({product}){
  return(
    <View style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity style={styles.addProduct}>
                <Image style={styles.addButton} source={require('../assets/add_circle.png')}></Image>
            </TouchableOpacity>
        </View>
  )
}

export default function ClothesArea() {
  return(
      <View style={styles.container}>
          {products.map(product => (
              <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </View>
  )
}