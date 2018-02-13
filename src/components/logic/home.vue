<template>
    <div>
        <site-header></site-header>
        <star-goods></star-goods>
    </div>
</template>
<script>
import SiteHeader from '@/components/logic/SiteHeader'  // 顶部导航 
import StarGoods from '@/components/logic/StarGoods'  // 明星单品界面
export default {
    components: {
        SiteHeader,
        StarGoods,
    }
}
</script>
