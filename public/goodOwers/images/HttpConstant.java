package com.small.carstop.constants;

/**
 * 网络请求常量
 * 
 * @author C's
 * @date 2014-3-25 上午11:31:53
 * @version V1.0
 */
public class HttpConstant {


	public static final String URL = "120.24.80.26";
	// static String URL = "192.168.1.253:3000";
	// public static String URL = "192.168.1.142:3000";
	// public static String URL = "192.168.1.150:3000";
	// public static String URL = "120.24.103.206";


	/*--------------------------app相关-------------------------------------*/
	/** 软件更新- 检查APK版本号是否有更新 */
	public static String UPDATE_SELECT = "http://" + URL + "/version/lastversion.json";
	/** 软件更新- 下载APK */
	public static String UPDATE_DOWNLOAD = "http://" + URL + "/version/";
	/*--------------------------密码密保相关-------------------------------------*/
	/** 找回密码界面 - 验证码 */
	public static String FINDPASSWORDCODE = "http://" + URL + "/parkUser/findPasswordCode";
	/** 找回密码界面 - 重置密码 */
	public static String FINDPWD_REST = "http://" + URL + "/parkuser/resetPassword";
	/** 查看密保问题 */
	public static String PASSSWORDQUESTLOOKUP = "http://" + URL + "/admin/viewquestion";
	/** 增加密保 */
	public static String ADDENCRYPTED = "http://" + URL + "/parkuser/addEncrypted";
	/** 用户 - 修改密码 */
	public static String UPDATEPASSWORD = "http://" + URL + "/parkuser/modifyPass";

	/*--------------------------注册登录相关-------------------------------------*/
	/** 注册界面 - 请求验证码 */
	public static String REG_CAPTCHA = "http://" + URL + "/parkUser/phonecode";
	/** 注册界面 - 注册帐号 */
	public static String REG_REGISTER = "http://" + URL + "/parkUser/register";
	/** 登录请求 */
	public static String LOGIN_COMMIT = "http://" + URL + "/parkUser/login";
	/** 用户 - 注销用户 */
	public static String USER_END = "http://" + URL + "/parkuser/logout";

	/*--------------------------广告轮播相关-------------------------------------*/
	/******* 顶部轮播图版本更新查询的url ******/
	public static String Top_Img_Version = "http://" + URL + "/parkuser/upImage/version";
	/******* 获取最新的轮播图的url ******/
	public static String Get_Top_Img = "http://" + URL + "/images/";
	/******* 获取最新的轮播图的url下载地址json ******/
	public static String Top_Img_Json = "http://" + URL + "/admin/getBroadcastImg";

	/*--------------------------优惠返利相关-------------------------------------*/
	/** 优惠信息返现的URL 二维码功能 */
	public static String CASH_BACK = "http://" + URL + "/park/merchant";
	/** 设置代付商户 二维码功能 */
	public static String PAID_MALL = "http://" + URL + "/park/carowner";

	/** 设置优惠券登陆功能 */
	public static String COUPONSLOGIN = "http://" + URL + "/company/commanageLogin1";

	/** 设置优惠券信息 */
	public static String COUPONSMEMU = "http://" + URL + "/coupon/PCCreateCouponsOrder";

	/** 设置二维码时间信息 */
	public static String COUPONSQRTIME = "http://" + URL + "/parkuser/serverTime";

	/** 商家优惠信息的URL */
	public static String QUERY_PUBLISH = "http://" + URL + "/coupon/queryMerchantCouponPublish";

	/** 商家优惠信息生成优惠码 */
	public static String YOUHUI_CODE = "http://" + URL + "/coupon/createMerchantCouponCode";

	/** 商家优惠信息查询优惠码 */
	public static String QUERY_YOUHUI_CODE = "http://" + URL + "/coupon/queryMerchantCouponCode";

	/** 商家优惠信息反馈优惠评价 */
	public static String CODE_FEDBACK = "http://" + URL + "/coupon/createCouponCodeFedback";

	/*--------------------------充值相关-------------------------------------*/
	/** 现金充值 */
	public static String RWCHANGE_URL = "http://" + URL + "/pay/tcsh/rechange";
	/** 微信充值 */
	public static String WX_PAY = "http://" + URL + "/pay/wx/rechange";
	/** 支付宝充值 */
	public static String ALI_PAY = "http://" + URL + "/pay/alipay/rechange";
	/** 支付宝充值成功回调 */
	public static String Ali_suess = "http://" + URL + "/pay/alipay/success";
	/** 银联充值 */
	public static String UNION_PAY = "http://" + URL + "/pay/unionpay/rechange";
	/** 扫码支付 */
	public static String CODE = "http://" + URL + "/webchatPark/page/carGetMoneyScnning";
	/** 支付宝支付 */
	public static String ALIPAY_PAY = "http://" + URL + "/pay/scannAliPay/rechange";
	/** 支付宝支付成功回调 */
	public static String ALIPAY_PAY_SUCCESS = "http://" + URL + "/pay/scannAliPay/succes65s";
	/** 微信支付 */
	public static String WXIN_PAY = "http://" + URL + "/pay/scannWXPay/rechange";
	/** 小猫支付 */
	public static String SMALL_PAY = "http://" + URL + "/pay/renew/smallPay";

	/*--------------------------记录查询相关-------------------------------------*/
	/** 个人余额查询地址 */
	public static String GET_MONEY = "http://" + URL + "/pay/account/getmoney";
	/** 普通用户查询消费记录 */
	public static String USER_NORMAL_LOOKUP_XIAOFEI = "http://" + URL + "/park/lookup/parkConList";
	/** 普通用户查询充值记录 */
	public static String GET_RECORD = "http://" + URL + "/pay/account/getrecord";
	/** 普通用户查询返利记录 */
	public static String USER_NORMAL_LOOKUP_FANLI = "http://" + URL + "/park/lookup/merchantLookPaymentList";
	/** 普通用户查询优惠券记录 */
	public static String USER_NORMAL_LOOKUP_YOUHUI = "http://" + URL + "/mobileManage/getCouponById";
	/** 商户查询代付记录 */
	public static String USER_MERCHANT_LOOKUP_DAIFU = "http://" + URL + "/park/lookup/merchantLookPaymentList";
	/** 商户查询返利记录 */
	public static String USER_MERCHANT_LOOKUP_FANLI = "http://" + URL + "/park/lookup/merchantLookList";

	/*--------------------------车牌号相关-------------------------------------*/
	/** 添加车牌号 */
	public static String ADDPLATE = "http://" + URL + "/parkuser/addPlate";
	/** 删除车牌号 */
	public static String REMOVEPLATE = "http://" + URL + "/parkuser/removePlate";
	/** 违章查询 */
	public static String QUERY = "http://" + URL + "/unionPay/traffic/query";
	/** 违章缴费 */
	public static String QUERY_PAY = "http://" + URL + "/TrafficPay/pay";
	/** 意见反馈 */
	public static String SUGGEST = "http://" + URL + "/admin/userFeedBackInfo";
	/** 查看反馈 */
	public static String SEESUGGEST = "http://" + URL + "/admin/seeFeedBackInfo";
	/** 崩溃日志 */
	public static String CASHLOG = "http://" + URL + "/admin/collapseLog";
	/** 停车场管理员手动入场 */
	// public static String ADMIN_MANAGE = "http://" + URL +
	// "/mobileManage/insertTemporaryRecord";
	/** 公司管理员绑定车牌 */
	public static String COMPANY_ADMIN_ADD_CARNUMBER = "http://" + URL + "/company/comBindCarNumber";
	/** 公司管理员解除绑定车牌 */
	public static String COMPANY_ADMIN_DELECT_CARNUMBER = "http://" + URL + "/company/removeBindCarNumber";
	/** 公司管理员查询停车场 */
	public static String COMPANY_ADMIN_FIND_PARK = "http://" + URL + "/company/findcompanyparkrelationship";
	/** 我是停车场管理员 */
	public static String ADMIN_LOGIN = "http://" + URL + "/mobileManage/parkAdminLogin";
	// /mobileManage/insertTemporaryRecord1 停车场管理员 开闸关闸
	public static String INSERT_TEMPORARY_RECORD1 = "http://" + URL + "/mobileManage/insertTemporaryRecord1";

	/*--------------------------消息推送相关-------------------------------------*/
	/** 登录成功后保存userId和推送registrationId到服务端 */
	public static String SAVE_USERID_AND_REGISTRATIONID = "http://" + URL + "/admin/registrationId";
	/** 上传图片的路径 */
	public static String UPDOWN = "http://" + URL + "/admin/appealplate"; //

	/** 查询车主账号的信息 */
	public static String SEARCH = "http://" + URL + "/parkuser/viewPlateNumber"; // "192.168.1.131:3000"
	/** 提交商户信息资料 */
	public static String MEARCHANT_INFO = "http://" + URL + "/parkuser/commit/merchantInfo";
	/** 确认用户户是否提交商户信息 */
	public static String MEARCHANT_CONFIRM = "http://" + URL + "/parkuser/confirm/merchantInfo";
	/** 加解锁车牌 */
	public static String SUOCAR = "http://" + URL + "/parkUser/lockPlate";
	/** 获取车主的停车信息 */
	public static String PARK_INFO = "http://" + URL + "/parkuser/lockPlateInfoNew"; // parkuser/lockPlateInfoNew
	/*--------------------------个人信息-图片存取相关------------------------------------*/
	public static String STORAGE_PHOTO = "http://" + URL + "/admin/appealPlate";
	/** 修改个人信息 */
	public static String UPDATE_INFO = "http://" + URL + "/parkuser/commit/person_data";
	public static String GET_INFO = "http://" + URL + "/parkuser/get/person_data";
	public static String Down_Img = "http://" + URL + "/userImage/";

	/*--------------------------地图相关-------------------------------------*/
	public static String FETCHPARKUID = "http://" + URL + "/parkuser/fetchParkuid";
	public static String VOLIDATA_UID = "http://" + URL + "/parkuser/matchSmallPark";
	/** 空车位查找 */
	public static String SMALLPOIDETAILFETCH = "http://" + URL + "/parkuser/parkDetail";
	/** 反向寻车 */
	public static String RETURN_PATH = "http://" + URL + "/admin/findCarPositionInfo";
	/** 一键挪车 */
	public static String Move_Car = "http://" + URL + "/park/move/message";
	/** 可办理VIP停车场 */
	public static String CARD = "http://" + URL + "/parkuser/nearbySamllParkOfDomembers";
	/** 停车场详情 */
	public static String DETAILS = "http://" + URL + "/parkuser/smallParkInfoForDomembers";
	/** 支付宝提交数据 */
	public static String ALIPAY_SUBMIT_DATA = "http://" + URL + "/pay/aliMobileMemPay/rechange";
	/** 微信提交数据 */
	public static String WXPAY_SUBMIT_DATA = "http://" + URL + "/pay/wxMobileMemPay/rechange";
	/** 提交资料支付宝支付成功回调 */
	public static String ALIPAY_SUCCESS = "http://" + URL + "/pay/aliMobileMemPay/success";
	/** 查看审核进度 */
	public static String PROGRESS = "http://" + URL + "/park/lookup/mobileMemberList";
	/** 停车信息 */
	public static String PARKINFO = "http://" + URL + "/parkuser/findSomeCarRecord";
	/** 反向寻车 */
	public static String VRLSMAN = "http://" + URL + "/admin/findCarPositionInfo";
	/** 续费月卡会员 */
	public static String RENEW_VIP = "http://" + URL + "/monthCard/queryMonthCard";
	/** 支付宝会员续费 */
	public static String ALIPAY_RENEW = "http://" + URL + "/pay/aliRenewMemPay/rechange";
	/** 微信会员续费 */
	public static String WXPAY_RENEW = "http://" + URL + "/pay/wxRenewMemPay/rechange";
	/** 续费会员订单详情 */
	public static String ORDER_RENEW_VIP = "http://" + URL + "/park/lookup/mobileMemberList";
	/** 月卡续费停车场 */
	public static String PARKNAME_VIP = "http://" + URL + "/monthCard/getMonthCardParkingList";
	/** 预定车位历史记录 */
	public static String PARKING_RECORD = "http://" + URL + "/reserveParking/queryReserveRecord";
	/** 预定车位列表 */
	public static String OPEN_RESERVE_PARKING_LIST = "http://" + URL + "/reserveParking/openReserveParkingList";
	/** 预定车位 */
	public static String RESERVE_REQUEST = "http://" + URL + "/reserveParking/reserveRequest";
	/** 预定车位手动接单模式 */
	public static String RESERVE_PAYMENT = "http://" + URL + "/reserveParking/rePayment";
	/** 是否接收短信 */
	public static String SMS_MESG = "http://" + URL + "/mobileManage/isOpenSMS";
	/** 月卡查询 */
	public static String CARD_QUERY = "http://" + URL + "/mobileManage/getMonthcardById";
	/** 月卡剩余时间查询 */
	public static String CARD_TIME_QUERY = "http://" + URL + "/parkuser/getMonthCradPlateNumberInfo";
	/** 查询用户绑定车牌在场的停车场 */
	public static String QUERY_COUPON_PARKNAME = "http://" + URL + "/coupon/queryCarRecordByUserId";
	/** 摇一摇抢红包 */
	public static String GET_REDPACKET = "http://" + URL + "/coupon/userGetRedPackets";
	/** 使用红包优惠 */
	public static String USE_COUPON_ORDERBY_ORDERID = "http://" + URL + "/coupon/useCouponOrderByOrderId";
	/** 查询广告商家信息 */
	public static String QUERYADMERCHANT_BYPARKID = "http://" + URL + "/coupon/queryAdMerchantByParkId";
	/** 查询是否有红包领取 */
	public static String QUERYADMERCHANT_BYUSERID = "http://" + URL + "/coupon/queryAdMerchantByUserId";
	/** 红包记录 */
	public static String REDPACKET_RECORD = "http://" + URL + "/coupon/userGetRedPacketsRecords";
	/** 获取商家商品信息 */
	public static String MERCHANT_DETAILS = "http://" + URL + "/coupon/queryAdMerchantGoodsById";
	/** 查询商家发布的优惠信息 */
	public static String QUERY_COUPON_INFO = "http://" + URL + "/coupon/queryAdMerchantCouponById";
	/** 领取商家发布的优惠券 */
	public static String GET_MERCHANT_COUPON = "http://" + URL + "/coupon/userGetAdMerchantCoupon";
	/** 优惠券优惠记录 */
	public static String QUERY_COUPON_RECORD = "http://" + URL + "/coupon/queryUserCouponOrdersById";

	public static final int REQUEST_MAP_INFO = 119;

	/*--------------------------更改手机号-------------------------------------*/
	public static String PHONECHANG1 = "http://" + URL + "/parkUser/android/userCancelPwd";
	public static String PHONECHANG2 = "http://" + URL + "/parkUser/phonecodeAppeal";
	public static String PHONECHANG3 = "http://" + URL + "/parkUser/userCancel";

	/*--------------------------代泊相关-------------------------------------*/
	public static String DAIBOAREASIJI = "http://" + URL + "/apps/valetStaffPush/fetchStallInfo";
	public static String GETDAIBODRIVER = "http://" + URL + "/apps/valetStaffPush/autoMatchStaff";
	public static String DAIBOXIADAN = "http://" + URL + "/apps/valetStaffPush/valetServiceBill";
	public static String DAIBO_VALIDATEDRIVER = "http://" + URL + "/apps/valetCustomer/valetVerify";
	public static String DAIBO_DRIVER_LOCATION = "http://" + URL + "/apps/valetStaffPush/driverPosition";
	public static String DAIBO_CANCELORDER = "http://" + URL + "/apps/valetStafforder/cancelOrder";
	public static String DAIBO_CHELIANGGENGZHONG = "http://" + URL + "/apps/valetStaffPush/showTrack";
	public static String DAIBO_COMMENT = "http://" + URL + "/apps/valetStaffUser/showComment";
	public static String DAIBO_TAKECAR = "http://" + URL + "/apps/ValetStaffOrder/takeCar";
	public static String DAIBO_FUKUAN = "http://" + URL + "/apps/valetSettle/settle";
	public static String DAIBO_SUREPAY = "http://" + URL + "/apps/valetSettle/valetPay";
	public static String DAIBO_CHEZHUCOMMENT = "http://" + URL + "/apps/valetStaffUser/comment";

	/*--------------------------Im相关-------------------------------------*/
	public static String AVATAR_THUMB_PREFIX = "http://180.76.147.207:8080/Smallparking/UserResource/thumb";
	public static String AVATAR_ORIGINAL_PREFIX = "http://180.76.147.207:8080/Smallparking/UserResource/original";

	/*----发票-----*/
	public static String FAPIAO = "http://" + URL + "/parkuser/debitNote/generate";
	public static String FAPIAODETAIL = "http://" + URL + "/parkuser/receiptbill/getOrderlist";

}
