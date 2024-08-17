module my_addr::nft_sbt {
    use std::string::{Self, String};
    use std::vector;
    use aptos_std::table::{Self, Table};
    use aptos_framework::object::{Self, Object};
    use aptos_framework::event;
    use aptos_framework::timestamp;
    use aptos_framework::signer;

    struct Trait has copy, store, drop {
        trait_type: String,
        value: String,
    }

    struct NFT has key {
        name: String,
        description: String,
        image_url: String,
        traits: vector<Trait>,
        creation_timestamp: u64,
    }

    struct SBT has key {
        name: String,
        description: String,
        image_url: String,
        traits: vector<Trait>,
        creation_timestamp: u64,
    }

    struct TokenLists has key {
        nfts: Table<address, bool>,
        sbts: Table<address, bool>,
    }

    // Events
    #[event]
    struct MintNFTEvent has drop, store {
        creator: address,
        token_id: address,
    }

    #[event]
    struct MintSBTEvent has drop, store {
        creator: address,
        token_id: address,
    }

    #[event]
    struct TransferNFTEvent has drop, store {
        from: address,
        to: address,
        token_id: address,
    }

    // Error codes
    const ENOT_AUTHORIZED: u64 = 1;
    const ETOKEN_NOT_FOUND: u64 = 2;
    const ESBT_NOT_TRANSFERABLE: u64 = 3;

    public fun initialize(creator: &signer) {
        move_to(creator, TokenLists {
            nfts: table::new(),
            sbts: table::new(),
        });
    }

    public entry fun mint_nft(
        creator: &signer,
        name: String,
        description: String,
        image_url: String,
        trait_types: vector<String>,
        trait_values: vector<String>
    ) acquires TokenLists {
        let constructor_ref = object::create_object(signer::address_of(creator));
        let token_signer = object::generate_signer(&constructor_ref);
        let token_address = signer::address_of(&token_signer);

        let traits = create_traits(trait_types, trait_values);

        move_to(&token_signer, NFT {
            name,
            description,
            image_url,
            traits,
            creation_timestamp: timestamp::now_seconds(),
        });

        let token_lists = borrow_global_mut<TokenLists>(signer::address_of(creator));
        table::add(&mut token_lists.nfts, token_address, true);

        event::emit(MintNFTEvent {
            creator: signer::address_of(creator),
            token_id: token_address,
        });
    }

    public entry fun mint_sbt(
        creator: &signer,
        name: String,
        description: String,
        image_url: String,
        trait_types: vector<String>,
        trait_values: vector<String>
    ) acquires TokenLists {
        let constructor_ref = object::create_object(signer::address_of(creator));
        let token_signer = object::generate_signer(&constructor_ref);
        let token_address = signer::address_of(&token_signer);

        let traits = create_traits(trait_types, trait_values);

        move_to(&token_signer, SBT {
            name,
            description,
            image_url,
            traits,
            creation_timestamp: timestamp::now_seconds(),
        });

        let token_lists = borrow_global_mut<TokenLists>(signer::address_of(creator));
        table::add(&mut token_lists.sbts, token_address, true);

        event::emit(MintSBTEvent {
            creator: signer::address_of(creator),
            token_id: token_address,
        });
    }

    fun create_traits(trait_types: vector<String>, trait_values: vector<String>): vector<Trait> {
        let traits = vector::empty<Trait>();
        let i = 0;
        while (i < vector::length(&trait_types)) {
            let trait_type = *vector::borrow(&trait_types, i);
            let value = *vector::borrow(&trait_values, i);
            vector::push_back(&mut traits, Trait { trait_type, value });
            i = i + 1;
        };
        traits
    }

    public entry fun transfer_nft(from: &signer, to: address, token: Object<NFT>) {
        assert!(object::is_owner(token, signer::address_of(from)), ENOT_AUTHORIZED);
        object::transfer(from, token, to);

        event::emit(TransferNFTEvent {
            from: signer::address_of(from),
            to,
            token_id: object::object_address(&token),
        });
    }

    // Note: There's no transfer function for SBT as they are non-transferable by definition
    public fun get_nft_info(token: Object<NFT>): (String, String, String, vector<Trait>, u64) acquires NFT {
        let nft = borrow_global<NFT>(object::object_address(&token));
        (nft.name, nft.description, nft.image_url, *&nft.traits, nft.creation_timestamp)
    }

    public fun get_sbt_info(token: Object<SBT>): (String, String, String, vector<Trait>, u64) acquires SBT {
        let sbt = borrow_global<SBT>(object::object_address(&token));
        (sbt.name, sbt.description, sbt.image_url, *&sbt.traits, sbt.creation_timestamp)
    }
}