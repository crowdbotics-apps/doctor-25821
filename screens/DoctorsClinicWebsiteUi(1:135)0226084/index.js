import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_351}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5417/1fc8/6132c5e5b0034117a02d33bdf978261f"
          }}
          style={styles.ImageBackground_1_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67a4/d3f1/aea4950c0a6c612a0bc45edbf9fe1f0d"
          }}
          style={styles.ImageBackground_1_359}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f2c/af6a/805884733e28b7274a3404db74475798"
          }}
          style={styles.ImageBackground_1_360}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ef3/b4fb/8bd3f8c6672e001ec53c7a3ba67d25d6"
          }}
          style={styles.ImageBackground_1_361}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ba/9b7b/0cf9aa71f841348212dd219d9e4de663"
          }}
          style={styles.ImageBackground_1_368}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ac/cadf/3bdc5c41c88642fbc19398773df6e9f9"
          }}
          style={styles.ImageBackground_1_371}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1ea/513a/bec4130f4220c70e824ee37287506813"
          }}
          style={styles.ImageBackground_1_374}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2462/acf8/cd463b233339a5e68d54f3ade0ffac3a"
          }}
          style={styles.ImageBackground_1_375}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bc/7c87/91b82f529eea4d7d0b8f2785cd3f2dc9"
          }}
          style={styles.ImageBackground_1_376}
        />
        <View style={styles.View_1_377}>
          <Text style={styles.Text_1_377}>Booking of doctor’s appointment</Text>
        </View>
        <View style={styles.View_1_378}>
          <Text style={styles.Text_1_378}>
            We want to make sure that everyone has access to natural and
            effective care. With our special, you’ll receive a consultation and
            a digital posture assesment.
          </Text>
        </View>
        <View style={styles.View_1_379} />
        <View style={styles.View_1_380}>
          <Text style={styles.Text_1_380}>
            Don’t Miss Our Exclusive Patient Special
          </Text>
        </View>
        <View style={styles.View_1_381} />
        <View style={styles.View_1_382} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b03/7b99/e933a0c23a601253725609bdeed1d773"
          }}
          style={styles.ImageBackground_1_383}
        />
        <View style={styles.View_1_385}>
          <Text style={styles.Text_1_385}>Enter your email</Text>
        </View>
        <View style={styles.View_1_386}>
          <View style={styles.View_1_387} />
          <View style={styles.View_1_388}>
            <Text style={styles.Text_1_388}>Get Started</Text>
          </View>
        </View>
        <View style={styles.View_1_389}>
          <View style={styles.View_1_390}>
            <Text style={styles.Text_1_390}>240</Text>
          </View>
          <View style={styles.View_1_391}>
            <Text style={styles.Text_1_391}>
              Qualified Doctors &amp; Medical Specialists
            </Text>
          </View>
        </View>
        <View style={styles.View_1_392}>
          <View style={styles.View_1_393}>
            <Text style={styles.Text_1_393}>1.456</Text>
          </View>
          <View style={styles.View_1_394}>
            <Text style={styles.Text_1_394}>
              Medical Tests Done For Our Patients
            </Text>
          </View>
        </View>
        <View style={styles.View_1_395}>
          <View style={styles.View_1_396}>
            <Text style={styles.Text_1_396}>1M+</Text>
          </View>
          <View style={styles.View_1_397}>
            <Text style={styles.Text_1_397}>
              Years of Experience The Medical Field
            </Text>
          </View>
        </View>
        <View style={styles.View_1_398}>
          <View style={styles.View_1_399} />
          <View style={styles.View_1_400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e8/1b07/4f8a040f122c3dbb1b413e9076634edb"
              }}
              style={styles.ImageBackground_1_475}
            />
            <View style={styles.View_1_402}>
              <Text style={styles.Text_1_402}>8:30am</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_403}>
          <View style={styles.View_1_404} />
          <View style={styles.View_1_405}>
            <Text style={styles.Text_1_405}>9:15am</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f64f/e15b/908a2dd7270f1d47d1df4f4c159a305a"
            }}
            style={styles.ImageBackground_1_478}
          />
        </View>
        <View style={styles.View_1_407}>
          <View style={styles.View_1_408} />
          <View style={styles.View_1_409}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e8/1b07/4f8a040f122c3dbb1b413e9076634edb"
              }}
              style={styles.ImageBackground_1_481}
            />
            <View style={styles.View_1_411}>
              <Text style={styles.Text_1_411}>10:00am</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_412}>
          <View style={styles.View_1_413}>
            <View style={styles.View_1_414} />
            <View style={styles.View_1_415} />
            <View style={styles.View_1_416}>
              <View style={styles.View_1_417}>
                <View style={styles.View_1_418}>
                  <View style={styles.View_1_419}>
                    <Text style={styles.Text_1_419}>Dr. Angela Taylor</Text>
                  </View>
                  <View style={styles.View_1_420}>
                    <Text style={styles.Text_1_420}>Radiology</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/423a/8ded/ec8dfc62a7394999c809761291433f23"
                  }}
                  style={styles.ImageBackground_1_421}
                />
              </View>
              <View style={styles.View_1_422}>
                <View style={styles.View_1_423} />
                <View style={styles.View_1_424}>
                  <Text style={styles.Text_1_424}>Select</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_425}>
            <View style={styles.View_1_426} />
            <View style={styles.View_1_427} />
            <View style={styles.View_1_428}>
              <View style={styles.View_1_429}>
                <View style={styles.View_1_430}>
                  <View style={styles.View_1_431}>
                    <Text style={styles.Text_1_431}>Dr. Dani Daniels</Text>
                  </View>
                  <View style={styles.View_1_432}>
                    <Text style={styles.Text_1_432}>Radiology</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4514/6bdb/6c609ade971edebb461152425a753691"
                  }}
                  style={styles.ImageBackground_1_433}
                />
              </View>
              <View style={styles.View_1_434}>
                <View style={styles.View_1_435} />
                <View style={styles.View_1_436}>
                  <Text style={styles.Text_1_436}>Select</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_437}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c724/cb5a/388537684ab3da7ea5df13b15289113a"
            }}
            style={styles.ImageBackground_1_438}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7ba/05a6/6ac20646fe2625bd782d29e4cc4cd0bb"
            }}
            style={styles.ImageBackground_1_439}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7109/0f51/e97303e32e2b14eed06b0b4de95ddc66"
            }}
            style={styles.ImageBackground_1_440}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ef/8a4f/133b470b1e71b256be49840c689cf12e"
            }}
            style={styles.ImageBackground_1_484}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/3c50/37e67df18fde4debb8b4efd66a283158"
            }}
            style={styles.ImageBackground_1_442}
          />
        </View>
        <View style={styles.View_1_443} />
        <View style={styles.View_1_444}>
          <View style={styles.View_1_445}>
            <View style={styles.View_1_446}>
              <Text style={styles.Text_1_446}>Airi Health</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85ab/f10c/5a293e8ad98f55ca91eabadb1f34447b"
              }}
              style={styles.ImageBackground_1_487}
            />
          </View>
          <View style={styles.View_1_448}>
            <View style={styles.View_1_449}>
              <View style={styles.View_1_450} />
              <View style={styles.View_1_451}>
                <Text style={styles.Text_1_451}>Register</Text>
              </View>
            </View>
            <View style={styles.View_1_452}>
              <Text style={styles.Text_1_452}>Log In</Text>
            </View>
            <View style={styles.View_1_453}>
              <View style={styles.View_1_454}>
                <View style={styles.View_1_455}>
                  <Text style={styles.Text_1_455}>Services</Text>
                </View>
                <View style={styles.View_1_456}>
                  <Text style={styles.Text_1_456}>Clinic</Text>
                </View>
                <View style={styles.View_1_457}>
                  <Text style={styles.Text_1_457}>Doctors</Text>
                </View>
                <View style={styles.View_1_458}>
                  <Text style={styles.Text_1_458}>Contact</Text>
                </View>
              </View>
              <View style={styles.View_1_459}>
                <View style={styles.View_1_460}>
                  <Text style={styles.Text_1_460}>Home</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/121c/88f4/3c984131e92e04792eaf1089d9a301fb"
                  }}
                  style={styles.ImageBackground_1_461}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2ef/12d9/4b7c11e51bdf33331fc24bf618cc00d9"
          }}
          style={styles.ImageBackground_1_491}
        />
      </View>
      <View style={styles.View_1_137} />
      <View style={styles.View_1_138} />
      <View style={styles.View_1_139} />
      <View style={styles.View_1_140} />
      <View style={styles.View_1_141}>
        <View style={styles.View_1_142}>
          <View style={styles.View_1_143} />
          <View style={styles.View_1_144} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a992/095a/c9de60e83db31d8f4659fa70527e0f5b"
            }}
            style={styles.ImageBackground_1_145}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a61/b5ae/047377e5040fe91cfe2a541b830995ed"
            }}
            style={styles.ImageBackground_1_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68a9/420f/13b646e9cfd301b4c122ed087e737062"
            }}
            style={styles.ImageBackground_1_159}
          />
        </View>
        <View style={styles.View_1_166}>
          <View style={styles.View_1_167}>
            <Text style={styles.Text_1_167}>card holder name</Text>
          </View>
          <View style={styles.View_1_168}>
            <Text style={styles.Text_1_168}>Anita Rose</Text>
          </View>
        </View>
        <View style={styles.View_1_169}>
          <View style={styles.View_1_170}>
            <Text style={styles.Text_1_170}>vaid thru</Text>
          </View>
          <View style={styles.View_1_171}>
            <Text style={styles.Text_1_171}>09/17</Text>
          </View>
        </View>
        <View style={styles.View_1_172}>
          <View style={styles.View_1_173}>
            <Text style={styles.Text_1_173}>card number</Text>
          </View>
          <View style={styles.View_1_174}>
            <Text style={styles.Text_1_174}>3829 4820 4629 5025</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/537e/616c/e156766a34a99496f41d5b5bb6d5fa94"
          }}
          style={styles.ImageBackground_1_175}
        />
      </View>
      <View style={styles.View_1_178}>
        <View style={styles.View_1_179} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7149/d594/87f87cfbf6885afb23f50e4c9e0b0131"
          }}
          style={styles.ImageBackground_1_180}
        />
        <View style={styles.View_1_184}>
          <Text style={styles.Text_1_184}>Views</Text>
        </View>
        <View style={styles.View_1_185}>
          <View style={styles.View_1_186}>
            <View style={styles.View_1_187}>
              <View style={styles.View_1_188} />
              <View style={styles.View_1_189} />
            </View>
            <View style={styles.View_1_190}>
              <Text style={styles.Text_1_190}>16 August</Text>
            </View>
            <View style={styles.View_1_191}>
              <Text style={styles.Text_1_191}>840</Text>
            </View>
          </View>
          <View style={styles.View_1_192}>
            <View style={styles.View_1_193}>
              <Text style={styles.Text_1_193}>Mon</Text>
            </View>
            <View style={styles.View_1_194}>
              <Text style={styles.Text_1_194}>Tue</Text>
            </View>
            <View style={styles.View_1_195}>
              <Text style={styles.Text_1_195}>Wed</Text>
            </View>
            <View style={styles.View_1_196}>
              <Text style={styles.Text_1_196}>Thu</Text>
            </View>
            <View style={styles.View_1_197}>
              <Text style={styles.Text_1_197}>Fri</Text>
            </View>
            <View style={styles.View_1_198}>
              <Text style={styles.Text_1_198}>Sat</Text>
            </View>
            <View style={styles.View_1_199}>
              <Text style={styles.Text_1_199}>Sun</Text>
            </View>
          </View>
          <View style={styles.View_1_200}>
            <View style={styles.View_1_201}>
              <Text style={styles.Text_1_201}>2k</Text>
            </View>
            <View style={styles.View_1_202}>
              <Text style={styles.Text_1_202}>800</Text>
            </View>
            <View style={styles.View_1_203}>
              <Text style={styles.Text_1_203}>500</Text>
            </View>
          </View>
          <View style={styles.View_1_204}>
            <View style={styles.View_1_205}>
              <View style={styles.View_1_206} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/018b/bda8/b93a4f221a426e99e1781a2284d5d342"
                }}
                style={styles.ImageBackground_1_207}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d245/b092/6b803f4ffc95df63a6f4cd7c7c0a8e2b"
              }}
              style={styles.ImageBackground_1_208}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/459d/7429/21c3e2067e15f2e0ea9a087f212faf87"
          }}
          style={styles.ImageBackground_1_209}
        />
        <View style={styles.View_1_210}>
          <Text style={styles.Text_1_210}>Activity</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afb0/bca7/b829d4514cc580b13c25422b3336aa97"
          }}
          style={styles.ImageBackground_1_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3caf/416e/6ae68307626da0d1b9a544aaf62e4fac"
          }}
          style={styles.ImageBackground_1_212}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_351: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("135.24590163934425%"),
    minHeight: hp("135.24590163934425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15.300546448087433%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_1_352: {
    width: wp("70.84375%"),
    minWidth: wp("70.84375%"),
    height: hp("60.40308801202826%"),
    minHeight: hp("60.40308801202826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-34.3125%"),
    top: hp("84.69945772098062%")
  },
  ImageBackground_1_359: {
    width: wp("40.875%"),
    minWidth: wp("40.875%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.3125%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_1_360: {
    width: wp("67.76151275634766%"),
    minWidth: wp("67.76151275634766%"),
    height: hp("138.9433480351349%"),
    minHeight: hp("138.9433480351349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.18174362182617%"),
    top: hp("32.98734237587517%")
  },
  ImageBackground_1_361: {
    width: wp("70.84375%"),
    minWidth: wp("70.84375%"),
    height: hp("60.40308801202826%"),
    minHeight: hp("60.40308801202826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.3125%"),
    top: hp("-7.923497267759564%")
  },
  ImageBackground_1_368: {
    width: wp("5.6875%"),
    minWidth: wp("5.6875%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.625%"),
    top: hp("18.032786885245898%")
  },
  ImageBackground_1_371: {
    width: wp("2.875%"),
    minWidth: wp("2.875%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.375%"),
    top: hp("44.80874316939891%")
  },
  ImageBackground_1_374: {
    width: wp("45.3125%"),
    minWidth: wp("45.3125%"),
    height: hp("118.71584699453553%"),
    minHeight: hp("118.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.125%"),
    top: hp("16.530054644808743%"),
    resizeMode: "cover"
  },
  ImageBackground_1_375: {
    width: wp("45.3125%"),
    minWidth: wp("45.3125%"),
    height: hp("118.71584699453553%"),
    minHeight: hp("118.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.25%"),
    top: hp("16.530054644808743%"),
    resizeMode: "cover"
  },
  ImageBackground_1_376: {
    width: wp("45.3125%"),
    minWidth: wp("45.3125%"),
    height: hp("118.71584699453553%"),
    minHeight: hp("118.71584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.125%"),
    top: hp("16.530054644808743%"),
    resizeMode: "cover"
  },
  View_1_377: {
    width: wp("13.8125%"),
    minWidth: wp("13.8125%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4375%"),
    top: hp("25.5464480874317%")
  },
  Text_1_377: {
    color: "rgba(33, 94, 233, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_378: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4375%"),
    top: hp("62.568306010928964%")
  },
  Text_1_378: {
    color: "rgba(33, 94, 233, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_379: {
    width: wp("13.750000000000002%"),
    minWidth: wp("13.750000000000002%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4375%"),
    top: hp("55.05464480874316%"),
    backgroundColor: "rgba(190, 210, 255, 1)"
  },
  View_1_380: {
    width: wp("33.9375%"),
    minWidth: wp("33.9375%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4375%"),
    top: hp("31.42076502732241%")
  },
  Text_1_380: {
    color: "rgba(33, 94, 233, 1)",
    fontSize: 52,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.65,
    textTransform: "none"
  },
  View_1_381: {
    width: wp("32.1875%"),
    minWidth: wp("32.1875%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5%"),
    top: hp("81.9672131147541%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_1_382: {
    width: wp("32.1875%"),
    minWidth: wp("32.1875%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5%"),
    top: hp("81.9672131147541%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_1_383: {
    width: wp("1.5%"),
    minWidth: wp("1.5%"),
    height: hp("4.580229879077015%"),
    minHeight: hp("4.580229879077015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.875%"),
    top: hp("84.97267759562841%")
  },
  View_1_385: {
    width: wp("7.249999999999999%"),
    minWidth: wp("7.249999999999999%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.5625%"),
    top: hp("85.24590163934427%")
  },
  Text_1_385: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_386: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.75%"),
    top: hp("83.06010928961749%")
  },
  View_1_387: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 94, 233, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_1_388: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8125%"),
    top: hp("2.185792349726782%")
  },
  Text_1_388: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_389: {
    width: wp("8.8125%"),
    minWidth: wp("8.8125%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375%"),
    top: hp("107.51366120218579%")
  },
  View_1_390: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_390: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 45,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -4,
    textTransform: "none"
  },
  View_1_391: {
    width: wp("8.8125%"),
    minWidth: wp("8.8125%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775953%")
  },
  Text_1_391: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_392: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.875%"),
    top: hp("107.51366120218579%")
  },
  View_1_393: {
    width: wp("7.8125%"),
    minWidth: wp("7.8125%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_393: {
    color: "rgba(33, 94, 233, 1)",
    fontSize: 45,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -4,
    textTransform: "none"
  },
  View_1_394: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775953%")
  },
  Text_1_394: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_395: {
    width: wp("8.875%"),
    minWidth: wp("8.875%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.0625%"),
    top: hp("107.51366120218579%")
  },
  View_1_396: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_396: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 45,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -4,
    textTransform: "none"
  },
  View_1_397: {
    width: wp("8.875%"),
    minWidth: wp("8.875%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775953%")
  },
  Text_1_397: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_398: {
    width: wp("7.6875%"),
    minWidth: wp("7.6875%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.1875%"),
    top: hp("93.71584699453553%")
  },
  View_1_399: {
    width: wp("7.6875%"),
    minWidth: wp("7.6875%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_400: {
    width: wp("5.1875%"),
    minWidth: wp("5.1875%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_1_475: {
    width: wp("1.125%"),
    minWidth: wp("1.125%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%")
  },
  View_1_402: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1875%"),
    top: hp("0%")
  },
  Text_1_402: {
    color: "rgba(65, 79, 249, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_403: {
    width: wp("7.6875%"),
    minWidth: wp("7.6875%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.625%"),
    top: hp("93.71584699453553%")
  },
  View_1_404: {
    width: wp("7.6875%"),
    minWidth: wp("7.6875%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(65, 79, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_405: {
    width: wp("2.8125%"),
    minWidth: wp("2.8125%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8125%"),
    top: hp("1.3661202185792263%")
  },
  Text_1_405: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_478: {
    width: wp("1.125%"),
    minWidth: wp("1.125%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("1.7759562841530112%")
  },
  View_1_407: {
    width: wp("7.6875%"),
    minWidth: wp("7.6875%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.0625%"),
    top: hp("93.71584699453553%")
  },
  View_1_408: {
    width: wp("7.6875%"),
    minWidth: wp("7.6875%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_409: {
    width: wp("5.6875%"),
    minWidth: wp("5.6875%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_1_481: {
    width: wp("1.125%"),
    minWidth: wp("1.125%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%")
  },
  View_1_411: {
    width: wp("3.5000000000000004%"),
    minWidth: wp("3.5000000000000004%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1875%"),
    top: hp("0%")
  },
  Text_1_411: {
    color: "rgba(65, 79, 249, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_412: {
    width: wp("24.4375%"),
    minWidth: wp("24.4375%"),
    height: hp("29.23497267759563%"),
    minHeight: hp("29.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.875%"),
    top: hp("104.6448087431694%")
  },
  View_1_413: {
    width: wp("22.8125%"),
    minWidth: wp("22.8125%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_414: {
    width: wp("21.9375%"),
    minWidth: wp("21.9375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4375%"),
    top: hp("12.021857923497251%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_415: {
    width: wp("22.8125%"),
    minWidth: wp("22.8125%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_416: {
    width: wp("21.0625%"),
    minWidth: wp("21.0625%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6875%"),
    top: hp("1.5027322404371546%")
  },
  View_1_417: {
    width: wp("14.4375%"),
    minWidth: wp("14.4375%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_418: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4375%"),
    top: hp("1.9125683060109253%")
  },
  View_1_419: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_419: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_420: {
    width: wp("3.9375%"),
    minWidth: wp("3.9375%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_1_420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_421: {
    width: wp("4.8125%"),
    minWidth: wp("4.8125%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_422: {
    width: wp("4.75%"),
    minWidth: wp("4.75%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.3125%"),
    top: hp("2.185792349726782%")
  },
  View_1_423: {
    width: wp("4.75%"),
    minWidth: wp("4.75%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(65, 79, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_424: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.125%"),
    top: hp("1.3661202185792263%")
  },
  Text_1_424: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_425: {
    width: wp("22.8125%"),
    minWidth: wp("22.8125%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.625%"),
    top: hp("15.84699453551913%")
  },
  View_1_426: {
    width: wp("21.9375%"),
    minWidth: wp("21.9375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4375%"),
    top: hp("11.885245901639337%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_427: {
    width: wp("22.8125%"),
    minWidth: wp("22.8125%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_428: {
    width: wp("21.0625%"),
    minWidth: wp("21.0625%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6875%"),
    top: hp("1.5027322404371546%")
  },
  View_1_429: {
    width: wp("13.9375%"),
    minWidth: wp("13.9375%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_430: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4375%"),
    top: hp("1.912568306010911%")
  },
  View_1_431: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_432: {
    width: wp("3.9375%"),
    minWidth: wp("3.9375%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_1_432: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_433: {
    width: wp("4.8125%"),
    minWidth: wp("4.8125%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_434: {
    width: wp("4.75%"),
    minWidth: wp("4.75%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.3125%"),
    top: hp("2.1857923497267677%")
  },
  View_1_435: {
    width: wp("4.75%"),
    minWidth: wp("4.75%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(65, 79, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_436: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.125%"),
    top: hp("1.3661202185792263%")
  },
  Text_1_436: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_437: {
    width: wp("50.625%"),
    minWidth: wp("50.625%"),
    height: hp("53.41530054644809%"),
    minHeight: hp("53.41530054644809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5625%"),
    top: hp("16.530054644808743%")
  },
  ImageBackground_1_438: {
    width: wp("7.5625%"),
    minWidth: wp("7.5625%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("36.88524590163935%")
  },
  ImageBackground_1_439: {
    width: wp("4.4375%"),
    minWidth: wp("4.4375%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.524590163934423%")
  },
  ImageBackground_1_440: {
    width: wp("4.3125%"),
    minWidth: wp("4.3125%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5625%"),
    top: hp("0%")
  },
  ImageBackground_1_484: {
    width: wp("1.7500001192092896%"),
    minWidth: wp("1.7500001192092896%"),
    height: hp("3.825136872588611%"),
    minHeight: hp("3.825136872588611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.8125%"),
    top: hp("2.595628415300542%")
  },
  ImageBackground_1_442: {
    width: wp("2.75%"),
    minWidth: wp("2.75%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.875%"),
    top: hp("12.021857923497262%")
  },
  View_1_443: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4375%"),
    top: hp("3.005464480874318%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_444: {
    width: wp("80.75%"),
    minWidth: wp("80.75%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.625%"),
    top: hp("5.054644808743168%")
  },
  View_1_445: {
    width: wp("7.249999999999999%"),
    minWidth: wp("7.249999999999999%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.775956284153004%")
  },
  View_1_446: {
    width: wp("5.125%"),
    minWidth: wp("5.125%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.125%"),
    top: hp("0%")
  },
  Text_1_446: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_487: {
    width: wp("1.5%"),
    minWidth: wp("1.5%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_448: {
    width: wp("53.5%"),
    minWidth: wp("53.5%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.25%"),
    top: hp("0%")
  },
  View_1_449: {
    width: wp("9.125%"),
    minWidth: wp("9.125%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("0%")
  },
  View_1_450: {
    width: wp("9.125%"),
    minWidth: wp("9.125%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 94, 233, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_1_451: {
    width: wp("4.0625%"),
    minWidth: wp("4.0625%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5625%"),
    top: hp("2.3224043715846996%")
  },
  Text_1_451: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_452: {
    width: wp("2.9375%"),
    minWidth: wp("2.9375%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2.185792349726775%")
  },
  Text_1_452: {
    color: "rgba(125, 135, 144, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_453: {
    width: wp("27.875%"),
    minWidth: wp("27.875%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  View_1_454: {
    width: wp("22.375%"),
    minWidth: wp("22.375%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.5%"),
    top: hp("0%")
  },
  View_1_455: {
    width: wp("4.1875%"),
    minWidth: wp("4.1875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_455: {
    color: "rgba(125, 135, 144, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_456: {
    width: wp("2.75%"),
    minWidth: wp("2.75%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8125%"),
    top: hp("0%")
  },
  Text_1_456: {
    color: "rgba(125, 135, 144, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_457: {
    width: wp("3.875%"),
    minWidth: wp("3.875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999993%"),
    top: hp("0%")
  },
  Text_1_457: {
    color: "rgba(125, 135, 144, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_458: {
    width: wp("3.875%"),
    minWidth: wp("3.875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.5%"),
    top: hp("0%")
  },
  Text_1_458: {
    color: "rgba(125, 135, 144, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_459: {
    width: wp("2.875%"),
    minWidth: wp("2.875%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_460: {
    width: wp("2.875%"),
    minWidth: wp("2.875%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_460: {
    color: "rgba(33, 94, 233, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_461: {
    width: wp("0.43750000000000006%"),
    minWidth: wp("0.43750000000000006%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("4.098360655737707%")
  },
  ImageBackground_1_491: {
    width: wp("1.375%"),
    minWidth: wp("1.375%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.125%"),
    top: hp("30.05464480874317%")
  },
  View_1_137: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.125%"),
    top: hp("111.0655737704918%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_138: {
    width: wp("23.5%"),
    minWidth: wp("23.5%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%"),
    top: hp("144.672131147541%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_139: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.125%"),
    top: hp("111.0655737704918%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_140: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.125%"),
    top: hp("111.0655737704918%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_141: {
    width: wp("25%"),
    height: hp("34.69945355191257%"),
    top: hp("85.65573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.125%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_142: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_143: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 94, 233, 1)",
    opacity: 0.800000011920929,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_144: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 94, 233, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_145: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_152: {
    width: wp("14.185827255249023%"),
    minWidth: wp("14.185827255249023%"),
    height: hp("31.35665518338563%"),
    minHeight: hp("31.35665518338563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.476041793823242%"),
    top: hp("-17.070272060039926%")
  },
  ImageBackground_1_159: {
    width: wp("4.089136123657227%"),
    minWidth: wp("4.089136123657227%"),
    height: hp("9.066186706876495%"),
    minHeight: hp("9.066186706876495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.762744903564453%"),
    top: hp("6.969271592103709%")
  },
  View_1_166: {
    width: wp("6.5625%"),
    minWidth: wp("6.5625%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5%"),
    top: hp("26.229508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_167: {
    width: wp("6.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_168: {
    width: wp("5.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.322404371584682%")
  },
  Text_1_168: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_169: {
    width: wp("3.4375000000000004%"),
    minWidth: wp("3.4375000000000004%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("26.229508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_170: {
    width: wp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_171: {
    width: wp("3.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.322404371584682%")
  },
  Text_1_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_172: {
    width: wp("20.1875%"),
    minWidth: wp("20.1875%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5%"),
    top: hp("12.295081967213108%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_173: {
    width: wp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_174: {
    width: wp("20.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%")
  },
  Text_1_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_1_175: {
    width: wp("3.6249999999999996%"),
    minWidth: wp("3.6249999999999996%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5%"),
    top: hp("3.278688524590166%")
  },
  View_1_178: {
    width: wp("24.5625%"),
    minWidth: wp("24.5625%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.8125%"),
    top: hp("123.22404371584699%")
  },
  View_1_179: {
    width: wp("24.5625%"),
    minWidth: wp("24.5625%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_180: {
    width: wp("18.625%"),
    minWidth: wp("18.625%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("12.021857923497265%")
  },
  View_1_184: {
    width: wp("1.8124999999999998%"),
    minWidth: wp("1.8124999999999998%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.25%"),
    top: hp("2.0491803278688536%")
  },
  Text_1_184: {
    color: "rgba(142, 159, 185, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_185: {
    width: wp("21.937498092651367%"),
    minWidth: wp("21.937498092651367%"),
    height: hp("21.029279531676913%"),
    minHeight: hp("21.029279531676913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("6.1520269008282185%")
  },
  View_1_186: {
    width: wp("4.701120376586914%"),
    minWidth: wp("4.701120376586914%"),
    height: hp("7.3875406400753505%"),
    minHeight: hp("7.3875406400753505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.958395004272461%"),
    top: hp("0%")
  },
  View_1_187: {
    width: wp("4.701120376586914%"),
    minWidth: wp("4.701120376586914%"),
    height: hp("7.3875406400753505%"),
    minHeight: hp("7.3875406400753505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000003814697265625%"),
    top: hp("0%")
  },
  View_1_188: {
    width: wp("4.701119899749756%"),
    minWidth: wp("4.701119899749756%"),
    height: hp("5.735258196221023%"),
    minHeight: hp("5.735258196221023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderTopLeftRadius: 8.746269226074219,
    borderTopRightRadius: 8.746269226074219,
    borderBottomLeftRadius: 8.746269226074219,
    borderBottomRightRadius: 8.746269226074219
  },
  View_1_189: {
    width: wp("1.5571174621582031%"),
    minWidth: wp("1.5571174621582031%"),
    height: hp("3.403535436411373%"),
    minHeight: hp("3.403535436411373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5907649993896484%"),
    top: hp("3.984003119129966%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderTopLeftRadius: 0.874626874923706,
    borderTopRightRadius: 0.874626874923706,
    borderBottomLeftRadius: 0.874626874923706,
    borderBottomRightRadius: 0.874626874923706
  },
  View_1_190: {
    width: wp("2.8972015380859375%"),
    minWidth: wp("2.8972015380859375%"),
    minHeight: hp("1.7922681537482257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8746261596679688%"),
    top: hp("1.075361074645656%")
  },
  Text_1_190: {
    color: "rgba(142, 159, 185, 1)",
    fontSize: 8.495522499084473,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_191: {
    width: wp("1.0932835340499878%"),
    minWidth: wp("1.0932835340499878%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8039169311523438%"),
    top: hp("3.1065977336278934%")
  },
  Text_1_191: {
    color: "rgba(62, 60, 80, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_192: {
    width: wp("19.04029655456543%"),
    minWidth: wp("19.04029655456543%"),
    height: hp("1.5532991273807046%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8972015380859375%"),
    top: hp("19.47598066486296%")
  },
  View_1_193: {
    width: wp("1.5400240421295166%"),
    minWidth: wp("1.5400240421295166%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_193: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_194: {
    width: wp("1.2600196599960327%"),
    minWidth: wp("1.2600196599960327%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2200469970703125%"),
    top: hp("0%")
  },
  Text_1_194: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_195: {
    width: wp("1.6800262928009033%"),
    minWidth: wp("1.6800262928009033%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.16009521484375%"),
    top: hp("0%")
  },
  Text_1_195: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_196: {
    width: wp("1.330020785331726%"),
    minWidth: wp("1.330020785331726%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.450149536132812%"),
    top: hp("0%")
  },
  Text_1_196: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_197: {
    width: wp("0.8400131464004517%"),
    minWidth: wp("0.8400131464004517%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.460197448730469%"),
    top: hp("0%")
  },
  Text_1_197: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_198: {
    width: wp("1.2600196599960327%"),
    minWidth: wp("1.2600196599960327%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.910232543945312%"),
    top: hp("0%")
  },
  Text_1_198: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_199: {
    width: wp("1.330020785331726%"),
    minWidth: wp("1.330020785331726%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.71027374267578%"),
    top: hp("0%")
  },
  Text_1_199: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_200: {
    width: wp("1.0932835340499878%"),
    minWidth: wp("1.0932835340499878%"),
    height: hp("11.231547496357901%"),
    minHeight: hp("11.231547496357901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.376805373228308%")
  },
  View_1_201: {
    width: wp("0.6559701561927795%"),
    minWidth: wp("0.6559701561927795%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4373130798339844%"),
    top: hp("0%")
  },
  Text_1_201: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_202: {
    width: wp("1.0932835340499878%"),
    minWidth: wp("1.0932835340499878%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.779382090750943%")
  },
  Text_1_202: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_203: {
    width: wp("1.0932835340499878%"),
    minWidth: wp("1.0932835340499878%"),
    minHeight: hp("1.5532991273807046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.67824967181096%")
  },
  Text_1_203: {
    color: "rgba(170, 176, 192, 1)",
    fontSize: 7.6208953857421875,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_204: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4375038146972656%"),
    top: hp("4.50371080408982%")
  },
  View_1_205: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_206: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_207: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14.071038251366119%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_208: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_1_209: {
    width: wp("0.43750000000000006%"),
    minWidth: wp("0.43750000000000006%"),
    height: hp("0.47814207650273227%"),
    minHeight: hp("0.47814207650273227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.125%"),
    top: hp("2.5956284153005384%")
  },
  View_1_210: {
    width: wp("3.3125%"),
    minWidth: wp("3.3125%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3125%"),
    top: hp("1.7759562841530112%")
  },
  Text_1_210: {
    color: "rgba(62, 60, 80, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_211: {
    width: wp("0.5%"),
    minWidth: wp("0.5%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.1875%"),
    top: hp("16.120218579234972%")
  },
  ImageBackground_1_212: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.4375%"),
    top: hp("17.3497267759563%")
  },
  View_2: { height: 1200 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
