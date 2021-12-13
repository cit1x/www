export default {

    Company: {
        domain_fqdn: 'cit1x.finance',
        domain_tld: '.finance',
        domain_name: 'cit1x',
        title: 'Cit1x',
        slogan: 'We find trades',
        Meta: {
            description: 'Cit1x helps you find efficient cryptocurrency trades',
        }
    },

    PRODUCTS: {

        // 'cit1x': {
        //     fqdn: 'https://www.cit1x.finance',
        //
        //     name: 'Cit1x',
        //     slogan: 'We help Citizens trade.',
        //     description: "Efficient Trade Router",
        //
        //     page: {
        //         href: '/cit1x',
        //         meta: {},
        //         hero: {
        //             strings: ['Citizens 1st', 'Cit1'], suffix: 'x'
        //         },
        //         action: 'Efficient Trade Router'
        //     },
        // },
        //
        // 'cit1s': {
        //     fqdn: 'https://www.cit1s.finance',
        //
        //     name: 'Cit1s',
        //     slogan: 'We help Citizens swap.',
        //     description: "Citizen Swap Shop",
        //
        //     page: {
        //         href: '/cit1s',
        //         meta: {},
        //         hero: {
        //             strings: ['Citizens 1st', 'Cit1'], suffix: 's'
        //         },
        //         action: 'Citizen Swap Shop'
        //     },
        // },
        //
        // 'uusd': {
        //     fqdn: 'https://www.uusd.finance',
        //
        //     name: 'UUSD',
        //     slogan: 'We help Citizens save.',
        //     description: "Meta Stable Coin",
        //
        //     page: {
        //         href: '/uusd',
        //         meta: {},
        //         hero: {
        //             strings: ['Universal', 'UBI', 'U'], suffix: 'USD'
        //         },
        //         action: 'Meta Stable Coin'
        //     },
        // },

    },

    forPage(id) {
        if (!this.PRODUCTS[id]) return undefined;
        return {
            Company: this.Company,
            Product: this.PRODUCTS[id],
        };
    }
}