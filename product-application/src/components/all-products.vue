<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'iPhone 9',
          price: 549,
          description: 'An apple mobile which is nothing like apple',
          imageUrl: 'https://i.dummyjson.com/data/products/1/1.jpg',
        },
        // Add more card objects here
      ],
    };
  },
};</script>

<template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>        <v-col cols="12" sm="6" md="4" lg="3" v-for="card in cards" :key="card.id">
          <v-card class="mx-auto card" max-width="400">
            <v-img
              height="200"
              :src="card.imageUrl"
              cover
            >
            </v-img> 
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle class="pt-2">           
              <div>{{ card.description }}</div>
            </v-card-subtitle>
            <v-card-text>
                Price {{ card.price }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

<!-- <template>
    <v-container>
        <v-row >
            <v-col col="12" md="4">
               <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                Number 10
                </v-card-subtitle>

                <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="orange">
                    Edit
                </v-btn>

                <v-btn color="orange">
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card> 
            </v-col>
            <v-col col="12" md="4">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                Number 10
                </v-card-subtitle>

                <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="orange">
                    Edit
                </v-btn>

                <v-btn color="orange">
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card> 
            </v-col>
            <v-col col="12" md="4">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                Number 10
                </v-card-subtitle>

                <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="orange">
                    Edit
                </v-btn>

                <v-btn color="orange">
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card> 
            </v-col>
            <v-col col="12" md="4">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                Number 10
                </v-card-subtitle>

                <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="orange">
                    Edit
                </v-btn>

                <v-btn color="orange">
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card> 
            </v-col>
            <v-col col="12" md="4">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                Number 10
                </v-card-subtitle>

                <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="orange">
                    Edit
                </v-btn>

                <v-btn color="orange">
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card> 
            </v-col>
            <v-col col="12" md="4">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                Number 10
                </v-card-subtitle>

                <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="orange">
                    Edit
                </v-btn>

                <v-btn color="orange">
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card> 
            </v-col>
            <v-col col="12" md="4">
                <v-card
                class="mx-auto"
                max-width="400"
                >
                <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                Number 10
                </v-card-subtitle>

                <v-card-text>
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="orange">
                    Edit
                </v-btn>

                <v-btn color="orange">
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card> 
            </v-col>
        </v-row>
    </v-container>
    
</template> -->