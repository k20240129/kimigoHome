<!-- @format -->

<template>
    <div class="fotter" id="lxwm">
        <div class="w fotterContent">
            <div class="logo">
                <div class="logos">
                    <img src="@/assets/logo.png" alt="" srcset="" />
                </div>
                <div class="logoTitle">
                    <img
                        :src="lang === 0 ? logoTitle : hatit"
                        alt=""
                        srcset=""
                        :style="{ width: lang === 0 ? '181px' : '769px' }"
                    />
                </div>
            </div>
            <div
                class="footer-desc"
                style="display: flex; justify-content: space-between"
            >
                <div>
                    <div
                        class="items"
                        v-for="item in routerdata"
                        :key="item.id"
                    >
                        <div class="item">
                            <div class="left" @click="skipincident(item.path)">
                                {{ item.name }}
                            </div>
                            <div class="right">
                                <div class="svg">
                                    <svg-icon :name="item.svg" />
                                </div>
                                <span>{{ item.span }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ewm">
                    <img :src="ewm" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, reactive } from "vue";
import hatit from "./image/hatit.png";
import logoTitle from "./image/logoTitle.png";
import ewm from "@/assets/image/ewm.png";
import { useI18n } from "vue-i18n";
import { useAppStore } from "~/src/store/app";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const app = useAppStore();
const { t } = useI18n();
const lang = computed(() => {
    return app.lang;
});

const routerdata = computed(() => {
    return [
        {
            svg: "yx",
            span: "info@kimigoshop.com",
            path: "#home",
            name: t("home.pickup.websitehomepage"),
            id: 0,
        },
        {
            svg: "wl",
            span: "www.kimigoshop.com",
            path: "#jjfa",
            name: t("home.pickup.waysofresolution"),
            id: 1,
        },
        {
            svg: "dz",
            span: t("home.pickup.site"),
            path: "#gywm",
            name: t("home.pickup.aboutus"),
            id: 2,
        },
    ];
});

const skipincident = (path: any) => {
    console.log("path", path);
    router.push({
        path: `/home/index`,
        hash: path,
    });
};
</script>

<style lang="scss" scoped>
.fotter {
    width: 100%;
    height: 17.4rem;
    background: #272727;
    .ewm {
        img {
            width: 250px;
            margin-top: -30px;
        }
    }
    .fotterContent {
        padding: 48px;

        .logo {
            display: flex;

            .logos img {
                width: 40px;
                height: 40px;
            }

            .logoTitle {
                margin-left: 15px;
                display: flex;
                flex-wrap: wrap;
                align-content: center;

                img {
                    height: 21px;
                    margin-bottom: 10px;
                }
            }
        }

        .items {
            margin-top: 26px;
            margin-left: 44px;

            .item {
                margin-top: 11px;

                .left:hover {
                    color: #ffd137;
                }

                .left {
                    /* 网站首页 */
                    position: absolute;
                    // width: 80px;
                    height: 20px;
                    opacity: 0.6;
                    font-size: 0.875rem;
                    font-weight: normal;
                    line-height: 20px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0em;
                    color: #ffffff;
                    cursor: pointer;
                }

                .right {
                    /* info@bkt-global.com */
                    margin-left: 166px;
                    height: 20px;
                    opacity: 0.6;
                    white-space: nowrap;

                    font-size: 14px;
                    font-weight: normal;
                    line-height: 20px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0em;

                    color: #ffffff;

                    .svg {
                        margin-right: 11.4px;
                    }
                }
            }
        }
    }
}

@media (max-width: 999px) {
    .fotter .fotterContent {
        width: 100%;
        padding: 0px;
    }

    .fotter {
        height: fit-content;
    }

    .fotter .fotterContent .logo {
        padding: 3rem 1.5rem 0rem 1.5rem;
    }

    .footer-desc {
        flex-direction: column;
        padding: 0rem 1.5rem 6rem 1.5rem;
    }

    .fotter .fotterContent .items .item .left {
        position: relative;
    }

    .fotter .fotterContent .items .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .fotter .fotterContent .items {
        margin-left: 0px;
    }

    .fotter .fotterContent .items .item .right {
        margin-left: 0px;
    }

    .ewm {
        display: flex;
        justify-content: center;
    }

    .fotter .ewm img {
        margin-top: 1.875rem;
    }
}
</style>
