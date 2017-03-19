<template>
    <div style="width:100%;height:100%;" class="layui-tab-brief">
        <ul class="layui-tab-title site-demo-title" style="margin-bottom:10px;">
            <li class="layui-this">字符串替换</li>
        </ul>
        <div style="width:100%;height:100%;">   
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">处理前</label>
                <div class="layui-input-block">
                    <textarea v-model="beforeTxt" placeholder="待处理字符串..." class="layui-textarea"></textarea>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">替换规则</label>
                <div class="layui-input-inline">
                     <v-select v-model="selectRule" :options="selectOptions"></v-select>
                </div>
                <div class="layui-input-inline">
                    <span style="height:38px;line-height:38px;">→_→</span>
                </div>
                <div class="layui-input-inline">
                    <input type="text" class="layui-input" v-model="r2" placeholder="替换字符串"/>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <div class="layui-input-block">
                    <v-button @click="replaceTxt()">
                        <span>替换 <i class="layui-icon">&#xe61a; </i></span>
                    </v-button>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">处理后</label>
                <div class="layui-input-block">
                    <textarea v-model="afterTxt" placeholder="处理后字符串..." class="layui-textarea"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                beforeTxt:'',
                afterTxt:'',
                selectRule:'space',
                r2:'',
                selectOptions:[
                    {
                        Text:'空格',
                        Value:'space'
                    },
                    {
                        Text:'回车',
                        Value:'enter'
                    }
                ],
            }
        },
        mounted(){
            // layui.code({
            //     title:'javascript',
            //     encode: true
            // });
        },
        methods: {
            replaceTxt(){
                var str=this.beforeTxt;
                var r1=this.selectRule;
                var r2=this.r2;
                console.log(r1);
                if(r1=='space'){
                    str = str.replace(/\ +/g, r2);
                    str = str.replace(/[ ]/g, r2); 
                }
                else if(r1=='enter'){
                    str=str.replace(/\r\n/g,r2)  
                    str=str.replace(/\n/g,r2)  
                }
                this.afterTxt=str
            }
        }
    }

</script>