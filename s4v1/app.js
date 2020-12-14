const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

  // Display our data: done
  // On click: flip cards back and forth: done
  // Get info for new cards from the user: done
    // Create data properties for front and back of new card
    // Bind properties to the form inputs of v model
  // Add new card when user hits enter or clicks button
    // create a method
        // creates a new card object containing new card info
        // pushes that card object into the cards array
  // Delete cards
  // Animate card flip
  // Display an error message if form fields are blank

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: '',
      error: false
    },
    methods: {
      toggleCard: function(card){
        card.flipped = !card.flipped;
      },
      addNew: function(){
        if(!this.newFront || !this.newBack) {
          this.error = true
        } else {
          this.cards.push({
            front: this.newFront,
            back: this.newBack,
            flipped: false
          })
          this.newFront = '';
          this.newBack = '';
          this.error = false;
        }
      }
    }
  });