<template>
  <div>
    <px-assets-table :assets="assets"></px-assets-table>
  </div>
</template>
<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'
export default {
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      assets: [
        {
          id: 'ethereum',
          rank: '2',
          symbol: 'ETH',
          name: 'Ethereum',
          supply: '112901088.4365000000000000',
          maxSupply: null,
          marketCapUsd: '38527740942.9691743208765083',
          volumeUsd24Hr: '1841435947.7633570637633113',
          priceUsd: '341.2521657365481188',
          changePercent24Hr: '0.9139544491661328',
          vwap24Hr: '339.8196372715923396'
        }
      ]
    }
  },
  created() {
    api.getAssets().then(assets => (this.assets = assets))
  }
}
</script>
